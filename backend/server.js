const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const admin = require('firebase-admin');
const { validateUser } = require('./middleware/validation');
const { authenticate } = require('./middleware/auth');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Apply authentication middleware to all routes
app.use(authenticate);

// Create user with validation
app.post('/user', validateUser, async (req, res) => {
  try {
    const userRecord = await admin.auth().createUser(req.body);
    res.status(201).json(userRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Initialize Firebase Admin SDK
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// User Management Endpoints

// Create user
app.post('/user', async (req, res) => {
  try {
    const userRecord = await admin.auth().createUser(req.body);
    res.status(201).json(userRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user
app.put('/user/:uid', async (req, res) => {
  try {
    const userRecord = await admin.auth().updateUser(req.params.uid, req.body);
    res.status(200).json(userRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete user
app.delete('/user/:uid', async (req, res) => {
  try {
    await admin.auth().deleteUser(req.params.uid);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user data
app.get('/user/:uid', async (req, res) => {
  try {
    const userRecord = await admin.auth().getUser(req.params.uid);
    res.status(200).json(userRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Task Management Endpoints

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasksSnapshot = await admin.firestore().collection('tasks').get();
    const tasks = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific task
app.get('/task/:id', async (req, res) => {
  try {
    const taskDoc = await admin.firestore().collection('tasks').doc(req.params.id).get();
    if (!taskDoc.exists) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ id: taskDoc.id, ...taskDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a task
app.post('/task', async (req, res) => {
  try {
    const taskRef = await admin.firestore().collection('tasks').add(req.body);
    const taskDoc = await taskRef.get();
    res.status(201).json({ id: taskDoc.id, ...taskDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a task
app.put('/task/:id', async (req, res) => {
  try {
    const taskRef = admin.firestore().collection('tasks').doc(req.params.id);
    await taskRef.update(req.body);
    const taskDoc = await taskRef.get();
    res.status(200).json({ id: taskDoc.id, ...taskDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task
app.delete('/task/:id', async (req, res) => {
  try {
    await admin.firestore().collection('tasks').doc(req.params.id).delete();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Project Management Endpoints

// Get all projects
app.get('/projects', async (req, res) => {
  try {
    const projectsSnapshot = await admin.firestore().collection('projects').get();
    const projects = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific project
app.get('/project/:id', async (req, res) => {
  try {
    const projectDoc = await admin.firestore().collection('projects').doc(req.params.id).get();
    if (!projectDoc.exists) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json({ id: projectDoc.id, ...projectDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a project
app.post('/project', async (req, res) => {
  try {
    const projectRef = await admin.firestore().collection('projects').add(req.body);
    const projectDoc = await projectRef.get();
    res.status(201).json({ id: projectDoc.id, ...projectDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a project
app.put('/project/:id', async (req, res) => {
  try {
    const projectRef = admin.firestore().collection('projects').doc(req.params.id);
    await projectRef.update(req.body);
    const projectDoc = await projectRef.get();
    res.status(200).json({ id: projectDoc.id, ...projectDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a project
app.delete('/project/:id', async (req, res) => {
  try {
    await admin.firestore().collection('projects').doc(req.params.id).delete();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});