const bodyParser = require('body-parser')
const express = require('express')
const Movies = require('./models')


const app = express()

app.get('/movies', async (request, response) => {
  const movies = await models.Movies.findAll({
    where: { directors: request.params.title }
  })
  
  return movies.length
    ? response.send(movies)
    : response.sendStatus(404)
})

app.get('/movies/:title', async(request, response) => {
  
  const matchingmovies = await Movies.findAll({
    where: {ID: request.params.title}
  })

return matchingmovies.length
  ? response.send(matchingmovies)
  : response.sendStatus(404)
  })


app.use(bodyParser.json())

app.post('/movies', async (request, response) => {
  const { title, directors, releaseDate, rating, runTime, genres } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    response.status(400).send('The following are required: title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovie = await models.Movies.create({ title, directors, releaseDate, rating, runTime, genres })

  response.sendStatus(201).send(newMovie)
})

const server = app.listen(1337, () => { console.log('Listening on port 1337') })

module.exports = server
