const db = require('../config/db');

const Placement = {
  create: (data, callback) => {
    const query = 'INSERT INTO placement (std_id, int_id, date_of_placement, placed_or_notplaced) VALUES (?, ?, ?, ?)';
    db.query(query, [data.std_id, data.int_id, data.date_of_placement, data.placed_or_notplaced], callback);
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM placement';
    db.query(query, callback);
  },

  // Add more functions for update and delete...
};

module.exports = Placement;
