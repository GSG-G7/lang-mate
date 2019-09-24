const router = require('express').Router();
const { auth: { login, logout, signup } } = require('../controllers');
const {
  users: {
    changePassword,
    getUserChannels,
    getUserByInterest,
    deactivateUser,
    getUserByLang,
    getUserProfile,
    searchUser,
  },
  messages: { addChannel },
  interests: { getAllInterests },
  languages: { language },
  errors: { errors },
} = require('../controllers');

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);

router.get('/language', language);
router.get('/interests', getAllInterests);
router.get('/channels/:username', getUserChannels);
router.post('/channels', addChannel);
router.get('/users/search', searchUser);
router.get('/users/nativeLang/:id', getUserByLang);
router.get('/users/interest/:id', getUserByInterest);
router.get('/users/profile/:username', getUserProfile);
router.put('/users/deactivate', deactivateUser);
router.put('/users/changePassword', changePassword);
router.use(errors);

module.exports = router;
