const { changePassword } = require('./changePassword');
const { deactivateUser } = require('./deactivateUser');
const { getUsersByInterest } = require('./getUsersByInterest');
const {
  getUserById, getUserByUsername, getUserByEmail, getUserByEmailOrUsername,
} = require('./getUserInfo');
const { getUsersByLang } = require('./getUsersByLang');
const { searchUsers } = require('./searchUsers');
const { getUserChannels } = require('./getUserChannels');
const { addUser } = require('./addUser');

module.exports = {
  changePassword,
  deactivateUser,
  getUserChannels,
  getUserById,
  getUserByUsername,
  getUsersByLang,
  searchUsers,
  getUsersByInterest,
  getUserByEmail,
  getUserByEmailOrUsername,
  addUser,
};
