const db = require('../../database');

module.exports = {
  profile: async({ ogEmail, firstName, lastName, userName, email, homePhone, mobile, fax, preferredContact, city, state, zip, address1, address2, role, organization }) => {
    try {
      let result = await db.none(`
      UPDATE profile
      SET
        firstName=$1,
        lastName=$2,
        userName=$3,
        email=$4,
        mobile=$5,
        preferredContact=$6,
        city=$7,
        state=$8,
        zip=$9,
        address1=$10,
        address2=$11,
        role=$12,
        organization=$13
        WHERE email=$14`, [firstName, lastName, userName, email, mobile, preferredContact, city, state, zip, address1, address2, role, organization, ogEmail]);
      return 'Post Successful';
    } catch(err) {
      console.log(err);
      return err;
    }
  },
}