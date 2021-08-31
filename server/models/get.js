const db = require('../../database');

module.exports = {
  offers: async ({ limit=25, category }) => {
    if (!category) {
      try {
        let results = await db.query(
          `SELECT
            p.id,
            p.title,
            p.body,
            p.date AS timestamp,
            p.category,
            profile.username
          FROM posts AS p
          INNER JOIN profile
          ON profile.id = p.user_id
          WHERE p.requestType=1
          ORDER BY p.date
          LIMIT $1
          `, [limit]);
        return results
      } catch(err) {
        console.log(err);
        return err;
      }
    } else {
      try {
        let results = await db.query(
          `SELECT
          p.id,
          p.title,
          p.body,
          p.date AS timestamp,
          p.category,
          profile.username
          FROM posts AS p
          INNER JOIN profile
          ON profile.id = p.user_id
          WHERE p.category =$1
          AND p.requestType = 1
          ORDER BY p.date
          LIMIT $2
          `, [category, limit]);
          return results;
      } catch(err) {
          console.log(err);
          return err;
      }
    }
  },
  profile: async ({ username }) => {
    try {
      let results = await db.query(`SELECT * FROM profile WHERE userName=$1`, [username]);
      return results;
    } catch(err) {
      console.log(err);
      return err;
    }
  },
  // comments: async ({ post_id }) => {
  //   // handle optional username, if (!username) vs CASE query
  //   try {
  //     let results = await.db.query(`SELECT id, username, body, date AS timestamp FROM comments WHERE post_id=$1`, [post_id]);
  //     return results;
  //   } catch(err) {
  //     console.log(err);
  //     return err;
  //   }
  // },
  // requests: async (req, res) => {
  //   try {
  //     let results = await db.query('SELECT * FROM posts WHERE user_id=(SELECT id FROM profile WHERE ');
  //     return results
  //   } catch(err) {
  //     console.log(err);
  //     return err;
  //   }
  // },
  // test: async (req, res) => {
  //   try {
  //     res.send('working?!')

  //   } catch(err) {
  //     console.log(err);
  //     return err;
  //   }
  // }
}