const express = require('express');

const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', (req,res) => {
    res.send('My Home Page');
});


// app.get('/posts', (req,res) => {
//     res.send('My Posts Page');
// });

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

mongoose.connect('mongodb+srv://testuser001:test@test@cluster0.2eq41.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true}, () => {
    console.log('Connected to DB');
})

app.listen(3000);