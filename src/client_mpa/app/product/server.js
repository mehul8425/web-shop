require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/products');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();

console.log('Starting the server...');

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api/products', productRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`Connected to MongoDB`);
        app.listen(PORT, () => {
            console.log(`Server is starting on port ${PORT}...`);
        });
    })
    .catch(err => console.error('MongoDB Connection Error:', err.message));
