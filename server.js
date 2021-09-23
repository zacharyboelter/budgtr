// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const PORT = 3000;

// =======================================
//              DATABASE
// =======================================
const budget = require("./models/budget");


// =======================================
//              MIDDLEWARE
// =======================================
// BODY PARSER
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Static
app.use(express.static('public'))
// =======================================
//              ROUTES
// =======================================
// index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', { ledger: budget });
});

// new

// create

// show
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {
        ledger: budget[req.params.index]
    });
});

// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
    console.log(`Get that money`, PORT);
})
