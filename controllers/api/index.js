// An index file that collects API routes and exports them for use

// Dependencies
// Server connection
const router = require('express').Router();
// User Routes
const userRoutes = require('./user-routes');
// Post Routes
const postRoutes = require('./post-routes');
// Comment Routes
const workoutRoutes = require('./workout-routes');

// Create a routing path for the API to follow, e.g. api/users/
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/workout', workoutRoutes);

// Export the router
module.exports = router;