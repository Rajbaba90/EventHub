// // second final code 
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
 

// server.js
// require('dotenv').config(); // Load environment variables
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // Import routes
// const authRoutes = require('./routes/auth');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON request body

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log(' MongoDB connected successfully'))
// .catch((err) => {
//   console.error('MongoDB connection error:', err.message);
//   process.exit(1); // Exit process if DB connection fails
// });

// // Base route
// app.get('/', (req, res) => {
//   res.send('Welcome to EventHub Backend API ');
// });

// // Routes
// app.use('/api/auth', authRoutes);

// // Server listen
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


