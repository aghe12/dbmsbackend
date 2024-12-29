const db = require('../config/db');

const Student = {
  create: (data, callback) => {
    const query = 'INSERT INTO student (name, email, year_of_grad, specialization) VALUES (?, ?, ?, ?)';
    db.query(query, [data.name, data.email, data.year_of_grad, data.specialization], callback);
  },
  
  getAll: (callback) => {
    const query = 'SELECT * FROM student';
    db.query(query, callback);
  },

  // Add more functions for update and delete...
};

module.exports = Student;
