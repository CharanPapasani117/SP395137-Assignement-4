const User = require('../models/User');
const jwt = require('jsonwebtoken');

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
// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create and save the new user
    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const userId = decodeJWT(req); // Extracted from decoded JWT in middleware
    const user = await User.findById(userId).select('-password'); // Exclude password

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const userId = decodeJWT(req);// Extracted from decoded JWT in middleware
    const { username, email } = req.body;

    // Validate if at least one field is provided
    if (!username && !email) {
      return res.status(400).json({ message: 'No data provided for update' });
    }

    // Update user profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email },
      { new: true, runValidators: true } // Return the updated document and validate the data
    ).select('username email');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.log("This is the error");
    res.status(500).json({ message: 'Failed to update profile', error: error.message });
  }
};
