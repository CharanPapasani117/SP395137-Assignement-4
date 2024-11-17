const jwt = require('jsonwebtoken');
const UserData = require('../models/UserData');
const Product = require('../models/Product');

// Decode JWT and extract user ID
const decodeJWT = (req) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    throw new Error('Token not provided');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

exports.buyItem = async (req, res) => {
  try {
    const userId = decodeJWT(req);
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    let userData = await UserData.findOne({ userId });
    if (!userData) {
      userData = new UserData({ userId, wishlist: [], cart: [] });
    }

    const existingCartItem = userData.cart.find(item => item.productId && item.productId.equals(productId));

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      userData.cart.push({ productId, quantity: 1 });
    }

    await userData.save();
    res.status(200).json({ message: 'Item added to cart', cart: userData.cart });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Failed to add item to cart', error: error.message });
  }
};

exports.updateCartQuantity = async (req, res) => {
  try {
    const userId = decodeJWT(req);
    const { productId, quantityChange } = req.body;

    let userData = await UserData.findOne({ userId });
    if (!userData) {
      return res.status(404).json({ message: 'User data not found' });
    }

    const cartItem = userData.cart.find(item => item.productId && item.productId.equals(productId));

    if (!cartItem) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    cartItem.quantity += quantityChange;

    if (cartItem.quantity <= 0) {
      userData.cart = userData.cart.filter(item => !item.productId.equals(productId));
    }

    await userData.save();
    res.status(200).json({ message: 'Cart updated', cart: userData.cart });
  } catch (error) {
    console.error('Error updating cart quantity:', error);
    res.status(500).json({ message: 'Failed to update cart quantity', error: error.message });
  }
};

exports.likeItem = async (req, res) => {
  try {
    const userId = decodeJWT(req);
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    let userData = await UserData.findOne({ userId });
    if (!userData) {
      userData = new UserData({ userId, wishlist: [], cart: [] });
    }

    const productExists = await Product.findById(productId);
    if (!productExists) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (!userData.wishlist.some(item => item.productId.equals(productId))) {
      userData.wishlist.push({ productId });
      await userData.save();
      return res.status(200).json({ message: 'Item added to wishlist', wishlist: userData.wishlist });
    }

    res.status(400).json({ message: 'Item already in wishlist' });
  } catch (error) {
    console.error('Error adding item to wishlist:', error);
    res.status(500).json({ message: 'Failed to add item to wishlist', error: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Failed to fetch items', error: error.message });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const userId = decodeJWT(req);
    const userData = await UserData.findOne({ userId }).populate('wishlist.productId');

    if (!userData || userData.wishlist.length === 0) {
      return res.status(404).json({ message: 'No items in wishlist' });
    }

    res.status(200).json(userData.wishlist);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).json({ message: 'Failed to fetch wishlist', error: error.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const userId = decodeJWT(req);
    const userData = await UserData.findOne({ userId }).populate('cart.productId');

    if (!userData || userData.cart.length === 0) {
      return res.status(404).json({ message: 'No items in cart' });
    }

    res.status(200).json(userData.cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Failed to fetch cart', error: error.message });
  }
};

exports.removeFromWishlist = async (req, res) => {
  try {
    const userId = decodeJWT(req);
    const { productId } = req.params;

    let userData = await UserData.findOne({ userId });
    if (!userData) {
      return res.status(404).json({ message: 'User data not found' });
    }

    userData.wishlist = userData.wishlist.filter(item => !item.productId.equals(productId));
    await userData.save();
    res.status(200).json({ message: 'Item removed from wishlist', wishlist: userData.wishlist });
  } catch (error) {
    console.error('Error removing item from wishlist:', error);
    res.status(500).json({ message: 'Failed to remove item from wishlist', error: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const userId = decodeJWT(req);
    const { productId } = req.params;

    let userData = await UserData.findOne({ userId });
    if (!userData) {
      return res.status(404).json({ message: 'User data not found' });
    }

    userData.cart = userData.cart.filter(item => !item.productId.equals(productId));
    await userData.save();

    res.status(200).json({ message: 'Item removed from cart', cart: userData.cart });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Failed to remove item from cart', error: error.message });
  }
};
