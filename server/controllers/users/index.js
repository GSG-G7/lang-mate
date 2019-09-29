const { changePassword } = require('./changePassword');
const { getUserChannels } = require('./getUserChannels');
const { getUsersByInterest } = require('./getUsersByInterest');
const { deactivateUser } = require('./deactivateUser');
const { getUsersByLang } = require('./getUsersByLang');
const { getUserInfo } = require('./getUserInfo');
const { searchUsers } = require('./searchUsers');

module.exports = {
  changePassword,
  getUserChannels,
  getUsersByInterest,
  deactivateUser,
  getUsersByLang,
  getUserInfo,
  searchUsers,
};
