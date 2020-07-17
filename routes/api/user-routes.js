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
    .post(createUser);

// GET a user by ID at /api/users/:id
router
    .route('/:id')
    .get(getUserbyID)
    .put(updateUser)
    .delete(deleteUser);

// Friends /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;