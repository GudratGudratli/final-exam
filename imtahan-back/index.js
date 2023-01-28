const express = require('express')
const cors = require("cors")
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const port = 3030

app.use(express())
app.use(cors())

app.use(bodyParser.json())

const CardSchema = new mongoose.Schema({
    imgUrl: String,
    title: String,
    description: String
  });

const Card = mongoose.model('MyCards', CardSchema);

app.get('/', (req, res) => {
    Card.find({},(err,docs)=>{
        if (!err) {
            res.json(docs)
        } else {
            res.send("Error")
        }
    });
})

app.get('/:id', (req, res) => {
    const id = req.params.id
    Card.findById(id, (err, docs)=> {
        if (!err) {
            res.json(docs)
        } else {
            res.send("Error")
        }
    });
})

app.post('/', (req, res) => {
    const card = new Card({
        imgUrl: req.body.imgUrl,
        title: req.body.title,
        description: req.body.description
    })
    card.save()
    res.json(Card)
})

app.delete('/:id', (req, res) => {
    const id = req.params.id
    Card.findByIdAndRemove(id, (err, docs)=> {
        if (!err) {
            res.json(docs)
        } else {
            res.send("Error")
        }
    });
})

app.put('/', (req, res) => {
    res.send('Update - PUT!')
})

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://kudretizade0:0703500103@cluster0.odgfw8n.mongodb.net/test')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})