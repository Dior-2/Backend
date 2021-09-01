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
  profile: async({ firebase_id, firstname, lastname, username, email, homephone, mobile, preferredcontact, city, state, zip, address1, address2, role, organization }) => {
    try {
      let result = await db.none(`INSERT INTO profile(id, firebase_id, firstName, lastName, userName, email, mobile, preferredContact, city, state, zip, address1, address2, role, organization) VALUES ((SELECT MAX(id) FROM profile) + 1, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`, [firebase_id, firstname, lastname, username, email, mobile, preferredcontact, city, state, zip, address1, address2, role, organization]);
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
  },
  comments: async ({ post_id, thread_id, email, body }) => {
    try {
      if ( !thread_id ) {
        debugger;
        [{ max }] = await db.query(`SELECT MAX(thread_id) FROM comments`);
        thread_id = parseInt(max);
        thread_id += 1;
      }
      let result = await db.none(
        `INSERT INTO comments
         (userName, post_id, thread_id, body, date)
         VALUES
         ((SELECT username FROM profile WHERE email=$1),
         $2,
         $3,
         $4,
         $5
         )`,
         [email, post_id, parseInt(thread_id), body, Date.now()]
      );
      return 'Much Success, Very Nice';
    } catch(err) {
      console.log(err);
      return err;
    }
  },
  // comments: async ({ post_id, thread_id, email, body }) => {
  //   try {
  //     if ( !thread_id ) thread_id = `(SELECT MAX(thread_id) FROM comments)+1`
  //     let result = await db.none(
  //       `INSERT INTO comments
  //        (id, userName, post_id, thread_id, body, date)
  //        VALUES
  //        ((SELECT MAX(id) FROM comments) +1,
  //        (SELECT username FROM profile WHERE email=$1),
  //        $2,
  //        $3,
  //        $4,
  //        $5,
  //        )`,
  //        [email, post_id, thread_id, body, Date.now()]
  //     );
  //     return ('Much Success, Very Nice');
  //   } catch(err) {
  //     console.log(err);
  //     return err;
  //   }
  // },
}