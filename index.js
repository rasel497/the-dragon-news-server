const express = require('express');
//01. enable data middleware cors Using client site //(1, 2) enble na korle data client site habe na.
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

//02. enable and call data middleware cors Using client site
//(01, 02)enble na korle data client site habe na
app.use(cors());

const categories = require('./data/categories.json');

// get, POST agula holo api
app.get('/', (req, res) => {
    res.send('News API is Running');
});

// won API sshow UI
app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('The Daragon Server running on port', port);

})