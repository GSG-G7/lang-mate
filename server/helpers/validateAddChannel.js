const yup = require('yup');

exports.validateChannel = yup.object({
  channelName: yup.string().min(3).required(),
});
