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
  profile: async ({ email }) => {
    try {
      let results = await db.query(`SELECT * FROM profile WHERE email=$1`, [email]);
      return results;
    } catch(err) {
      console.log(err);
      return err;
    }
  },
  requests: async ({limit, category}) => {
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
          WHERE p.requestType=0
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
          AND p.requestType = 0
          ORDER BY p.date
          LIMIT $2
          `, [category, limit]);
          return results;
      } catch(err) {
          console.log(err);
          return err;
      }
    }
  }
}