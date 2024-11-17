// routes/wishlist.js
const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

router.get('/', wishlistController.getWishlist);
router.post('/', wishlistController.toggleWishlist);
router.delete('/:productId', wishlistController.removeFromWishlist);

module.exports = router;
