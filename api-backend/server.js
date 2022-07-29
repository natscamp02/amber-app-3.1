require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3000;

// Connecting to the database
mongoose
    .connect(process.env.DATABASE_URL_LOCAL)
    .then(() => console.log('Connected to the database...'));

// Starting app
app.listen(port, () => console.log('Server running at port %s...', port));
