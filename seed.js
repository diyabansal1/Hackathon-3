const mongoose = require('mongoose');

const Product = require('./models/Product');

const products = [
    {
        author: "Diya Bansal",
        quote: "Success occurr ,when achieve work hard"
    },
    {
        author: "Albert Einstein ",
        quote: "Once you stop learning, you start dying."
    },
    {
        author: "Eleanor Roosevelt",
        quote: "In a gentle way, you can shake the world."
    },
    {
        author: "Thomas Edison",
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration."
    },
    {
        author: "Rudyard Kipling",
        quote: "He travels the fastest who travels alone."
    },
    {
        author: "Winston Churchill",
        quote: "If you are going through hell, keep going."
    },
    {
        author: "Forrest Gump",
        quote: "Life is like a box of chocolates. You never know what you’re gonna get."
    },


]

// seeding function
async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded successfully")
}

module.exports = seedDB;