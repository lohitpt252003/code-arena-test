require("dotenv").config(); // Load .env file

const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY;

app.get("/", (req, res) => {
    res.send(`Backend is running on port ${PORT} with secret key ${SECRET_KEY}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
