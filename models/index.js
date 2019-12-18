const Sequelize = require('Sequelize')

const MoviesModels = require('./movies')

const connection = new Sequelize('movies', 'movies', 'MOVIES', {
  host: 'localhost', dialect: 'mysql'
})

const Movies = MoviesModels(connection, Sequelize)

module.exports = {
  Movies
}