const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dbinfo_123:nyCvwPMD5vQyITlw@cluster0.2dekqa0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log('db connected');
app.get('/', (req, res) => {
    res.send('Running product  iitem information');
});

app.listen(port, () => {
    console.log('Product item info server is running', port);
})