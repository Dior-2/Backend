const db = require('../../database');

module.exports = {
  profile: async ({ username }) => {
    try {
      let results = await db.query('SELECT * FROM profile WHERE username=$1', [username]);
      return results;
    } catch(err) {
      console.log(err);
      return err;
    }
  },
  posts: async (req, res) => {
    try {
      let results = await db.query('SELECT * FROM posts WHERE user_id=(SELECT id FROM profile WHERE ');
      return results
    } catch(err) {
      console.log(err);
      return err;
    }
  }
}