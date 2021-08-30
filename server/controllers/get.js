const { get } = require('../models');

module.exports = {
  offers: async (req, res) => {
    try {
      let data = await get.offers(req.query);
      res.send(data)
      // res.status(200).json(data);
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
      //refactor to 'throw error'
    }
  },
  profile: async (req, res) => {
    try {
      let data = await get.profile(req.query);
      res.send(data)
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  requests: async (req, res) => {

    try {
      let data = await get.requests(req.query);
      res.status(200).json(data);
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  // different get functions from models
}