const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/TestDB", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) console.log('db connected')
    else console.log('error!');
})

const NewSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const newModel = new mongoose.model("Collection", NewSchema)
// const data = new newModel({name: 'messy', age: 30})
// data.save()

const data = async () => {
    const result = await newModel.insertMany([
        {
            name: 'rock',
            age: 30
        },
        {
            name: 'tokyo',
            age: 23
        }
    ])
    console.log(result);
}
data();

app.listen(5000, () => { console.log('connect') })