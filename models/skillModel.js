const db = require('../config/db');

const Skill = {
  create: (data, callback) => {
    const query = 'INSERT INTO skills (skill_name, description) VALUES (?, ?)';
    db.query(query, [data.skill_name, data.description], callback);
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM skills';
    db.query(query, callback);
  },

  // Add more functions for update and delete...
};

module.exports = Skill;
