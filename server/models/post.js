const db = require('../../database');

module.exports = {
  requests: async({ username, title, body, category }) => {
    try {
      let result = await db.none(`INSERT INTO posts(id, user_id, requestType, category, title, body, date) VALUES ((SELECT MAX(id) FROM posts) + 1, (SELECT id FROM profile WHERE userName=$1), $2, $3, $4, $5, $6)`, [username, 0, category, title, body, Date.now()]); // need to handle auto-increment id issue
      return 'Post Successful'
    } catch(err) {
      console.log(err);
      return err;
    }
  },

  offers: async ({userName, title, body, category}) => {
    try {
      let result = await db.none(
        `INSERT INTO
        posts (
          id,
          user_id,
          requestType,
          category,
          title,
          body,
          date
          )
          VALUES (
          (SELECT MAX(id)
          FROM posts)
          + 1,
          (SELECT
          id
          FROM
          profile
          WHERE
          userName=$1
          ),
          1, $2, $3, $4, $5
          )`,
            [userName, title, body, category, Date.now()]
          );
      return 'Much Success on Post!';
    } catch(err) {
      return err;
    }
  }
  // comment: async ({ post_id, username, body }) => {
  //   try {
  //     let result = await db.none(`INSERT INTO comments (post_id, donor_id, recipient_id, body)`, [post_id, </donor_id> , </recipient_id>, username, body, Date.now()]);
  //     return ('Successful Post'); // or just return
  //   } catch(err) {
  //     console.log(err);
  //     return err;
  //   }
  // }
}