const router = require('express').Router();
const {
  auth: { login, logout, signup },
  users: {
    changePassword,
    getUserChannels,
    getUserByInterest,
    deactivateUser,
    getUsersByLang,
    getUserInfo,
    searchUser,
  },
  messages: { addChannel, getChannelMessages },
  interests: { getAllInterests },
  languages: { getAllLanguages },
  errors: { errors },
} = require('../controllers');

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);

router.get('/languages', getAllLanguages);

router.get('/interests', getAllInterests);

router.get('/channels/:id', getChannelMessages);
router.post('/channels', addChannel);

router.get('/users/search', searchUser);
router.get('/users/native-lang/:id', getUsersByLang);
router.get('/users/interest/:id', getUserByInterest);
router.get('/users/profile/:username', getUserInfo);
router.put('/users/deactivate', deactivateUser);
router.put('/users/change-password', changePassword);
router.get('/users/channels/:username', getUserChannels);

router.use(errors);

module.exports = router;
