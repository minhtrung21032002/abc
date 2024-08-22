// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit', (req, res) => {
  const customField = req.body.customField;
  const isChecked = req.body.isChecked === 'true'; // Check if the checkbox was checked

  // Process the form data (e.g., save to database, etc.)
  console.log('Custom Field:', customField);
  console.log('Is Checked:', isChecked);

  // Send a response to the client
  res.send('Form submitted successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
