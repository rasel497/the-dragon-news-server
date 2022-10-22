const express = require('express');
//01. enable data middleware cors Using client site //(1, 2) enble na korle data client site habe na.
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

//02. enable and call data middleware cors Using client site
//(01, 02)enble na korle data client site habe na
app.use(cors());

const categories = require('./data/categories.json'); //categories-01
const news = require('./data/news.json'); // news-01

// get, POST agula holo api
app.get('/', (req, res) => {
    res.send('News API is Running');
});

// won API sshow UI //categories-01
app.get('/news-categories', (req, res) => {
    res.send(categories);
})

//all news category show home page
app.get('/news', (req, res) => {
    res.send(news);
})


// news category nibo tai filter use korbo
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    // condition for empty news jodi news na thke tmi sobgula news dekhaba
    if (id === '08') {
        res.send(news)
    }
    else {
        const category_news = news.filter(nw => nw.category_id === id);
    }

    const category_news = news.filter(nw => nw.category_id === id);
    res.send(category_news);
})

// single specefic nws nibo tai find use korsi news-01
app.get('/news/:id', (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id;
    const slectedNews = news.find(nw => nw._id === id);
    res.send(slectedNews);

});



app.listen(port, () => {
    console.log('The Daragon Server running on port', port);

})