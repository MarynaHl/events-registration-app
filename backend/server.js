const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const path = require('path');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));