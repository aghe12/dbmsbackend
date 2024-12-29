const db = require('../config/db');

const Internship = {
  create: (data, callback) => {
    const query = 'INSERT INTO internship (title, description, recruit_id) VALUES (?, ?, ?)';
    db.query(query, [data.title, data.description, data.recruit_id], callback);
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM internship';
    db.query(query, callback);
  },

  // Add more functions for update and delete...
};

module.exports = Internship;
