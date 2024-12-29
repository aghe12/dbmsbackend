const Skill = require('../models/skillModel');

exports.createSkill = (req, res) => {
  const newSkill = req.body;

  Skill.create(newSkill, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ message: 'Skill created successfully', id: result.insertId });
  });
};

exports.getAllSkills = (req, res) => {
  Skill.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(200).json(results);
  });
};
