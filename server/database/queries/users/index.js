const { changePassword } = require('./changePassword');
const { deactivateUser } = require('./deactivateUser');
const { reactivateUser } = require('./reactivateUser');
const { getUsersByInterest } = require('./getUsersByInterest');
const {
  getUserById, getUserByUsername, getUserByEmail, getUserByEmailOrUsername,
} = require('./getUserInfo');
const { getUsersByLang } = require('./getUsersByLang');
const { searchUsers } = require('./searchUsers');
const { getUserChannels } = require('./getUserChannels');
const { addUser } = require('./addUser');
const { addUserInterests } = require('./addUserInterests');

module.exports = {
  changePassword,
  deactivateUser,
  reactivateUser,
  getUserChannels,
  getUserById,
  getUserByUsername,
  getUsersByLang,
  searchUsers,
  getUsersByInterest,
  getUserByEmail,
  getUserByEmailOrUsername,
  addUser,
  addUserInterests,
};
