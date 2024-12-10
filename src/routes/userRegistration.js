const express = require('express');
const User = require('./models/User');
// Import user model
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
    res.status(500).json({ message: 'Server error', error });
}
});

module.exports = router;
