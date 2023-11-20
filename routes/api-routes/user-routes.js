const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend,
  //   checkFriendRemoved,
  } = require('../../controllers/user-controller');

  // GET and POST all users
router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// Add and Delete Friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
  