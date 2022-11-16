var express = require('express');
var router = express.Router();
const fetch = require ('node-fetch')

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.OWM_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        res.json({ movies: data });
      });
   });
// route /movies chargée de faire une requête vers le webservice The Movie Database afin de récupérer 
// les dernières "découvertes" proposées par l’API.

module.exports = router;
