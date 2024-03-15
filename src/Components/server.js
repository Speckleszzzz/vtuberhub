const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;
const uri = 'mongodb+srv://<akashcharles >:<akashcharles >@<cluster>/<database>?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const database = client.db('<database>');
    const collection = database.collection('<collection>');
    // Perform database operations here...
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
  }
}

connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
