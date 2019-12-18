const MoviesModel = (connection, Sequelize) => {
  return connection.define('movies', {}, {
    id: { type: Sequelize.INTERGER, AUTO_INCREMENT: true, primaryKey: true },
    title: {type: Sequelize.STRING },
    directors: {type: Sequelize.STRING },
    releaseDate: {type: Sequelize.STRING },
    rating: {type: Sequelize.ENUM() },
    runTime: {type: Sequelize.STRING },
    genres: {type: Sequelize.ENUM() },
   
  }, { paranoid: true})
}

module.exports = MoviesModel