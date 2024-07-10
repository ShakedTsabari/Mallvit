require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const mallRoutes = require('./routes/malls');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/malls', mallRoutes);


const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "mongodb+srv://reisstomer:firfir123@atlascluster.kx5ldka.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
// const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('MongoDB connected successfully.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});
