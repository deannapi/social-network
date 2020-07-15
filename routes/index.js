const router = require('express').Router();

// Import all of the API routes from /api/index.js
const apiRoutes = require('./api');
const { route } = require('./api');
const { model } = require('../models/User');

// add prefix of `/api` to all of the API routes imported from the 'api' directory
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> Uh Oh 404 Error!</h1>');
});

module.exports = router;