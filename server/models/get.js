const db = require('../../database');

module.exports = {
  offers: async ({ limit, category }) => {
    try {
      let results = await db.query(
        `SELECT
          p.id,
          p.title,
          p.body,
          p.date,
          p.category,
          profile.username
        FROM posts AS p
        INNER JOIN profile.id = p.user_id
        WHERE p.category =$1
        LIMIT $2
        ORDER BY p.date`, [category, limit]);
      return results;
    } catch(err) {
      console.log(err);
      return err;
    }
  },
  requests: async (req, res) => {
    try {
      let results = await db.query('SELECT * FROM posts WHERE user_id=(SELECT id FROM profile WHERE ');
      return results
    } catch(err) {
      console.log(err);
      return err;
    }
  },
  comments: async (req, res) => {
    try {

    } catch(err) {
      console.log(err);
      return err;
    }
  }
}