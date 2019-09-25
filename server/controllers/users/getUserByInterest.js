const { } = require('../../database/queries/');

exports.getUserByInterest = (req, res) => {
  const { id } = req.params;
  // Validate the id
  if (!Number(id)) throw new Error('Wrong interest id');
  // Call the query

  // Send the data
};
