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
  }
}