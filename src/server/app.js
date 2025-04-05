// File: src/server/app.js

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup for ES module compatibility (__dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create express app
const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the dist folder
app.use(express.static(path.resolve(__dirname, '../../dist')));

// Catch-all route to serve index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Exporting the app to be used in the main server file
export default app;
