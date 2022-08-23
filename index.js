const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dbinfo_123:nyCvwPMD5vQyITlw@cluster0.2dekqa0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const productCollection = client.db("products").collection("information");

        // get information
        app.get('/info', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const itemInfo = await cursor.toArray();
            res.send(itemInfo);
        })

        //add product information
        app.post('/info', async (req, res) => {
            const newInfo = req.body;
            console.log('adding new category', newInfo);
            const result = await productCollection.insertOne(newInfo);
            res.send(result);
        })

        // delete item
        app.delete('/info/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await productCollection.deleteOne(query);
            res.send(result);

        })
    }
    finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running product  iitem information');
});

app.listen(port, () => {
    console.log('Product item info server is running', port);
})