const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'build', 'index.html'));
})

app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT,() => {
    console.log(`server running on port : ${process.env.PORT}`);
})