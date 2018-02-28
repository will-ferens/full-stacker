const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('tiny'))

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World 🤮'
    })
})
app.get('/parks', (req, res) => {
    res.json([{
      park: 'Yosemite',
      state: 'California',
      image: 'https://i.imgur.com/GVJiybc.jpg'
    }, {
      park: 'Rocky Mountain',
      state: 'Colorado',
      image: 'https://i.imgur.com/nfkb9QX.jpg'
    }, {
      park: 'Grand Canyon',
      state: 'Arizona',
      image: 'https://i.imgur.com/d1MwEjl.jpg'
    }, {
      park: 'Grand Tetons',
      state: 'Wyoming',
      image: 'https://i.imgur.com/UJb7Bp7.jpg'
    }, {
      park: 'Glacier',
      state: 'Montana',
      image: 'https://i.imgur.com/mXF3SXb.jpg'
    },
    {
        park: 'Canyonlands',
        state: 'Utah',
        image: 'https://i.imgur.com/Wz9H7AG.jpg'
      }])
  })

app.use((req, res ,next) => {
    res.status(404)
    const error = new Error('Not Found, poop')
    next(error)
})

app.use((error, req, res, next) => {
    res.status(res.statusCode || 500)
    res.json({
        message: error.message,
        error: error.stack
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})