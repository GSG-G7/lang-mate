const { changePassword } = require('./changePassword');
const { getUserChannels } = require('./getUserChannels');
const { getUserByInterest } = require('./getUserByInterest');
const { deactivateUser } = require('./deactivateUser');
const { getUsersByLang } = require('./getUsersByLang');
const { getUserInfo } = require('./getUserInfo');
const { searchUser } = require('./searchUser');

module.exports = {
  changePassword,
  getUserChannels,
  getUserByInterest,
  deactivateUser,
  getUsersByLang,
  getUserInfo,
  searchUser,
};
