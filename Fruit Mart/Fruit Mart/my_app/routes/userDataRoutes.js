const express = require('express');
const router = express.Router();
const {
  getItems,
  likeItem,
  buyItem,
  getWishlist,
  getCart,
  removeFromWishlist,
  removeFromCart,
  updateCartQuantity
} = require('../controllers/userDataController');

// Route to get all items (products)
router.get('/items', getItems);

// Route to like an item (add to wishlist)
router.post('/like', likeItem);

// Route to buy an item (add to cart)
router.post('/buy', buyItem);

// Route to get wishlist
router.get('/liked', getWishlist);

// Route to get cart
router.get('/buyed', getCart);

// Route to remove item from wishlist
router.delete('/wishlist/:productId', removeFromWishlist);

// Route to remove item from cart
router.delete('/cart/:productId', removeFromCart);

// Route to update cart quantity
router.put('/updatecart', updateCartQuantity);

module.exports = router;
