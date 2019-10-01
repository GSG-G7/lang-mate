const router = require('express').Router();
const {
  auth: {
    login, logout, signup, auth,
  },
  users: {
    changePassword,
    getUserChannels,
    getUsersByInterest,
    deactivateUser,
    getUsersByLang,
    getUserInfo,
    searchUsers,
  },
  messages: { addChannel, getChannelMessages, getChannels },
  interests: { getAllInterests },
  languages: { getAllLanguages },
  errors: { errors },
} = require('../controllers');

router.post('/login', login);
router.post('/signup', signup);
router.use(auth);

router.post('/logout', logout);

router.get('/languages', getAllLanguages);

router.get('/interests', getAllInterests);

router.get('/channels/:id', getChannelMessages);
router.get('/getChannels', getChannels);
router.post('/channels', addChannel);

router.get('/users/search', searchUsers);
router.get('/users/native-lang/:id', getUsersByLang);
router.get('/users/interest/:id', getUsersByInterest);
router.get('/users/profile/:username', getUserInfo);
router.put('/users/deactivate', deactivateUser);
router.put('/users/change-password', changePassword);
router.get('/users/channels/', getUserChannels);

router.use(errors);

module.exports = router;
