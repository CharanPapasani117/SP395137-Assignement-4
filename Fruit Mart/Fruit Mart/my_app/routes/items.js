const express = require('express');
const router = express.Router();
const { getItems } = require('../controllers/userDataController'); // Correct import path

// Route to get all items (products)
router.get('/items', getItems);

module.exports = router;
