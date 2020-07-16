const router = require('express').Router();

const {
    getAllUsers,
    getUserbyID,
    createUser, 
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// GET ALL users for /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
    .post(addFriend)
    .delete(deleteFriend);

// GET a user by ID at /api/users/:id
router
    .route('/:id')
    .get(getUserbyID)
    .put(updateUser)
    .delete(deleteUser);

// POST a new user

module.exports = router;