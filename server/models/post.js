const db = require('../../database');

module.exports = {
  requests: async({ email, title, body, category }) => {
    try {
      let result = await db.none(`INSERT INTO posts(id, user_id, requestType, category, title, body, date) VALUES ((SELECT MAX(id) FROM posts) + 1, (SELECT id FROM profile WHERE email=$1), 0, $2, $3, $4, $5)`, [email, category, title, body, Date.now()]); // need to handle auto-increment id issue
      return 'Post Successful';
    } catch(err) {
      console.log(err);
      return err;
    }
  },
  profile: async({ firebase_id, firstName, lastName, userName, email, homePhone, mobile, fax, preferredContact, city, state, zip, address1, address2, role, organization }) => {
    try {
      let result = await db.none(`INSERT INTO profile(id, firebase_id, firstName, lastName, userName, email, mobile, preferredContact, city, state, zip, address1, address2, role, organization) VALUES ((SELECT MAX(id) FROM profile) + 1, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`, [firebase_id, firstName, lastName, userName, email, mobile, preferredContact, city, state, zip, address1, address2, role, organization]);
      return 'Post Successful';
    } catch(err) {
      console.log(err);
      return err;
    }
  },

  offers: async ({email, title, body, category}) => {
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
          email=$1
          ),
          1, $2, $3, $4, $5
          )`,
            [email, title, body, category, Date.now()]
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