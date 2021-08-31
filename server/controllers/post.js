const { post } = require('../models');

module.exports = {
  requests: async(req, res) => {
    try {
      let data = await post.requests(req.body);
      res.send(data)
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  profile: async(req, res) => {
    try {
      let data = await post.profile(req.body);
      res.send(data)
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
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