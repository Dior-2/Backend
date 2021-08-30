const { get } = require('../models');

module.exports = {
  offers: async (req, res) => {
    try {
      let data = await get.offers(req.query);
      res.status(200).json(data);
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
      //refactor to 'throw error'
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