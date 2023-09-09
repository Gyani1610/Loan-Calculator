const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Define the port to listen on

// Middleware for serving static files from the 'public' folder
app.use(express.static('public'));

// Define routes or API endpoints here
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Serve the main HTML file
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
