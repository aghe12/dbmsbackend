const db = require('../config/db');

const Recruiter = {
  create: (data, callback) => {
    const query = 'INSERT INTO recruiter (company_name, contact_person, con_email) VALUES (?, ?, ?)';
    db.query(query, [data.company_name, data.contact_person, data.con_email], callback);
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM recruiter';
    db.query(query, callback);
  },

  // Add more functions for update and delete...
};

module.exports = Recruiter;
