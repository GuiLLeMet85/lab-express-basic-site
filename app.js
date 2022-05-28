const express = require('express');

// Express server handling requests & responses
const app = express();

// Defino que mi carpeta de contenido estático es public
app.use(express.static('public'));

// Rutas que mandan archivo
app.get('/', (request, res, next) => {
    res.sendFile(__dirname + '/views/home.html')
  })
  
app.get('/about', (request, res, next) => {
    res.sendFile(__dirname + '/views/about.html')
  })

app.get('/works', (request, res, next) => {
    res.sendFile(__dirname + '/views/works.html')
  })


// Server started
app.listen(3000, () => { console.log('Connected on port 3000!')})