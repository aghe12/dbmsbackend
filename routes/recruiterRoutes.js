const express = require('express');
const router = express.Router();
const recruiterController = require('../controllers/recruiterController');

router.post('/', recruiterController.createRecruiter);
router.get('/', recruiterController.getAllRecruiters);

module.exports = router;
