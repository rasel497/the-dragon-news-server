const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

// get, POST agula holo api
app.get('/', (req, res) => {
    res.send('News API is Running');
});

app.listen(port, () => {
    console.log('The Daragon Server running on port', port);

})