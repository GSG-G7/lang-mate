const { changePassword } = require('./changePassword');
const { getUserChannels } = require('./getUserChannels');
const { getUserByInterest } = require('./getUserByInterest');
const { deactivateUser } = require('./deactivateUser');
const { getUserByLang } = require('./getUsersByLang');
const { getUserProfile } = require('./getUserProfile');
const { searchUser } = require('./searchUser');

module.exports = {
  changePassword,
  getUserChannels,
  getUserByInterest,
  deactivateUser,
  getUserByLang,
  getUserProfile,
  searchUser,
};
