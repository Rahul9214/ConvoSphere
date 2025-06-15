import express from 'express';
import { login, logout, onboard, signup } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.post('/onboarding', protectRoute, onboard);

// Later we can add more authentication-related routes, such as password reset, email verification, forget-password etc.

// Check if the user is authenticated (logged in)
router.get('/me', protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});
 
export default router;