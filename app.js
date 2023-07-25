const express = require('express');

const app = express();

//Make everything inside of public available
app.use(express.static('public'));

// about route
app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html')
})

// home route
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html')
})

// photo-gallery route
app.get('/gallery', (req, res, next) => {
    res.sendFile(__dirname + '/views/photo-gallery.html')
})

// works route
app.get('/works', (req, res, next) => {
    res.sendFile(__dirname + '/views/works.html')
})

// server started
app.listen(3000, () => console.log('The Rose app listening on port 3000'));