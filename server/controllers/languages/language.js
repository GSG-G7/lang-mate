const { getAllLanguages } = require('../../database/queries/languages/index');

exports.getAllLanguages = (req, res) => {
  getAllLanguages().then((result) => console.log(result.rows)).catch((err) => console.log(err));
  // res.send('hello from language file');
};
