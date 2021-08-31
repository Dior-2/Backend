const { put } = require('../models');

module.exports = {
  profile: async(req, res) => {
    try {
      let data = await put.profile(req.body);
      res.send(data);
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
}