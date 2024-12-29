const Recruiter = require('../models/recruiterModel');

exports.createRecruiter = (req, res) => {
  const newRecruiter = req.body;

  Recruiter.create(newRecruiter, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    
    res.status(201).json({ message: 'Recruiter created successfully', id: result.insertId });
  });
};

exports.getAllRecruiters = (req, res) => {
  Recruiter.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(200).json(results);
  });
};
