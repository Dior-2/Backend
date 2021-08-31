const db = require('../../database');

module.exports = {
  requests: async({ username, title, body, category }) => {
    try {
      let result = await db.none(`INSERT INTO posts(id, user_id, requestType, category, title, body, date) VALUES ((SELECT MAX(id) FROM posts) + 1, (SELECT id FROM profile WHERE userName=$1), $2, $3, $4, $5, $6)`, [username, 0, category, title, body, Date.now()]); // need to handle auto-increment id issue
      return 'Post Successful';
    } catch(err) {
      console.log(err);
      return err;
    }
  },
  profile: async({ firstName, lastName, userName, email, homePhone, mobile, fax, preferredContact, city, state, zip, address1, address2, role, organization }) => {
    debugger;
    try {
      let result = await db.none(`INSERT INTO profile(id, firstName, lastName, userName, email, mobile, fax, preferredContact, city, state, zip, address1, address2, role, organization) VALUES ((SELECT MAX(id) FROM profile) + 1, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`, [firstName, lastName, userName, email, mobile, fax, preferredContact, city, state, zip, address1, address2, role, organization]);
      return 'Post Successful';
    } catch(err) {
      console.log(err);
      return err;
    }
  },
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