const jwt = require('jsonwebtoken');
exports.refreshToken = (req, res) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Generate a new token with a refreshed expiry
    const newToken = jwt.sign(
      { id: decoded.id, username: decoded.username, email: decoded.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Adjust the expiry as needed
    );

    res.status(200).json({ token: newToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
