const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Express Server Running');
});

app.listen(PORT, () => {
    console.log(`Server is successfully running on http://localhost:${PORT}`);
});