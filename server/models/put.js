const db = require('../../database');

module.exports = {
  profile: async({ ogEmail, firebase_id firstName, lastName, userName, email, homePhone, mobile, preferredContact, city, state, zip, address1, address2, role, organization }) => {
    try {
      let result = await db.none(`
      UPDATE profile
      SET
        firebase_id=$1,
        firstName=$2,
        lastName=$3,
        userName=$4,
        email=$5,
        mobile=$6,
        preferredContact=$7,
        city=$8,
        state=$9,
        zip=$10,
        address1=$11,
        address2=$12,
        role=$13,
        organization=$14
        WHERE email=$15`, [firebase_id, firstName, lastName, userName, email, mobile, preferredContact, city, state, zip, address1, address2, role, organization, ogEmail]);
      return 'Post Successful';
    } catch(err) {
      console.log(err);
      return err;
    }
  },
}