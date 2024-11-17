// app.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path'); // Add this line

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
const authRoutes = require('./routes/authRoutes');
const itemsRoute = require('./routes/items');
const userDataRoutes = require('./routes/userDataRoutes');

app.use('/api', authRoutes);
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/wishlist', require('./routes/wishlist'));
app.use('/api', require('./routes/userRoutes'));
app.use('/api', itemsRoute);
app.use('/api/userdata', userDataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
