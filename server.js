const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes here...
const studentRoutes = require('./routes/studentRoutes');
const recruiterRoutes = require('./routes/recruiterRoutes');
const internshipRoutes = require('./routes/internshipRoutes');
const placementRoutes = require('./routes/placementRoutes');
const skillRoutes = require('./routes/skillRoutes');
const interviewRoutes = require('./routes/interviewRoutes');

// Use routes here...
app.use('/api/students', studentRoutes);
app.use('/api/recruiters', recruiterRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/placements', placementRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/interviews', interviewRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
