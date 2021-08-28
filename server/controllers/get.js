const { get } = require('../models');

module.exports = {
  profile: async (req, res) => {
    try {
      let data = await get.profile(req.query);
      res.status(200).json(data);
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  posts: async (req, res) => {
    try {
      let data = await get.posts(req.query);
      res.status(200).json(data);
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  // different get functions from models
}