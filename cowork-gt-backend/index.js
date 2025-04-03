require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // ✅ Import Mongoose
const authRoutes = require('./routes/authRoutes'); // ✅ Import Authentication Routes

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Add Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('CoWork-GT Backend is Up and Running! 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// This code sets up a basic Express server with CORS and JSON parsing middleware. It defines a root route that responds with a message indicating the server is running. The server listens on a specified port, defaulting to 5000 if not provided in the environment variables.
// The server is started and logs a message to the console indicating the port it's running on. 
