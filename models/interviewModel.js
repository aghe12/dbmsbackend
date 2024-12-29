const db = require('../config/db');

const Interview = {
  create: (data, callback) => {
    const query = 'INSERT INTO interviews (std_id, skill_id) VALUES (?, ?)';
    db.query(query, [data.std_id, data.skill_id], callback);
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM interviews';
    db.query(query, callback);
  },

  // Add more functions for update and delete...
};

module.exports = Interview;
