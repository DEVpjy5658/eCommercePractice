import express from "express";
import data from './data.js'

const app = express();

//for products
app.get('/api/products', (req, res) => {
    res.send(data.products)
});

//for slider
app.get('/api/slider', (req, res) => {
    res.send(data.sliderItems)
});

//for category
app.get('/api/category', (req, res) => {
    res.send(data.category)
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at hpps://localhost:${port}`);
})

