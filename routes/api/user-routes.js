const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser, 
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// GET ALL users for /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// GET a user by ID at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// POST a new user

module.exports = router;