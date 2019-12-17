const express = require('express')
const MovieModel = require('./models')
const bodyParser = require('body-parser')
const Op = require('sequelize').Op
const app = express()
app.use(bodyParser.json());


app.get('/movies', async (request, response) => {
    const movies = await MovieModel.Movies.findAll()
    response.send(movies)
})

app.get('/movies/:filter', async (request, response) => {
    const { filter } = request.params
    const match = await MovieModel.Movies.findOne({
      where: { [Op.or]: [{ id: filter }, { title: filter }, {director: filter}] }
    })

    response.send(match)
})


app.get('/director/:x', async (request, response) => {
    const { x } = request.params
    const idMatch = await MovieModel.Movies.findOne({
      where: {[Op.or]: [{id: x}]}
    })
    response.send(idMatch)
})


app.get('/genres/:y', async (request, response)=>{
    const { y } = request.params
    let genreMatch = await MovieModel.Movies.findOne({
      where: {[Op.or]: [{genres: y}]}
    })
    response.send(genreMatch)
})


app.post('/movies', bodyParser.json(), async (request, response) => {
    const {
      title, director, releaseDate, rating, runTime, genre
    } = request.body
  
    if (!title || !director || !releaseDate || !rating || !runTime || !genre) {
      response.status(400).send('missing required feilds')
    }
  
    const newMovie = await MovieModel.Movies.create({ title, director, releaseDate, rating, runTime, genre })
  
    response.status(201).send(newMovie)
  })

app.listen(1337, () =>{})