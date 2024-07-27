import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Homepage</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
