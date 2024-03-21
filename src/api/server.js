const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const CONNECTION_STRING = 'mongodb+srv://akashcharles:englandss2406@cluster0.lxuq4oq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const uploadSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String
});

const Upload = mongoose.model('Upload', uploadSchema);

app.post('/api/upload', async (req, res) => {
    try {
        const { name, description, imageUrl } = req.body;
        const upload = new Upload({ name, description, imageUrl });
        await upload.save();
        res.status(201).json({ message: 'Upload successful' });
    } catch (error) {
        console.error('Error uploading:', error);
        res.status(500).json({ error: 'Failed to upload' });
    }
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
