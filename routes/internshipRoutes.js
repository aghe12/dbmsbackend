const express = require('express');
const router = express.Router();
const internshipController = require('../controllers/internshipController');

router.post('/', internshipController.createInternship);
router.get('/', internshipController.getAllInternships);

module.exports = router;
