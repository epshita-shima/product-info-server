const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Running product  iitem information');
});

app.listen(port, () => {
    console.log('Product item info server is running', port);
})