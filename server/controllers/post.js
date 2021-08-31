const { post } = require('../models');

module.exports = {

  offers: async (req, res) => {
    try {
      let data = await post.offers(req.body);
      res.status(200).send('SUCCESS!')
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  // post function from models
  // comment: async (req, res) => {
  //   try {
  //     let data = await post.comment(req.body) // not req.query right?
  //     res.send(data)
  //   } catch(err) {
  //     console.log(err);
  //     res.status(400).send(err)
  //   }
  // },
}