const db = require('../../database');

module.exports = {
  photoDefault: (category) => {
    if (!category) return '';
    let defaults = {
      food: 'https://res.cloudinary.com/fearnomore/image/upload/v1630540954/fearnomore/ja-ma--gOUx23DNks-unsplash_ct7tv7.jpg',
      homegoods: 'https://res.cloudinary.com/fearnomore/image/upload/v1630540893/fearnomore/spacejoy-RqO6kwm4tZY-unsplash_tijenx.jpg',
      housing: 'https://res.cloudinary.com/fearnomore/image/upload/v1630540934/fearnomore/yi-sk-i7-zqldb2os-unsplash_oslgoe.jpg',
      bills: 'https://res.cloudinary.com/fearnomore/image/upload/v1630540922/fearnomore/sharon-mccutcheon-tn57JI3CewI-unsplash_ov3k4n.jpg',
    };
    return defaults[category];
  },
  postListing: async (args) => {
    try {
      // debugger;
      let result = await db.none(
        `INSERT INTO posts(
          id,
          user_id,
          requestType,
          category,
          title,
          body,
          date, photo)
        VALUES (
          (SELECT MAX(id) FROM posts) + 1,
          (SELECT id FROM profile WHERE email=$1),
          $2, $3, $4, $5, $6, $7
        )`, [...args]);
        return;
    } catch(err) {
      console.log(err)
      return err;
    }
  }
}