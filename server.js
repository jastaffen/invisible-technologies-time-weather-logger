const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.send('app running')
})

app.use('/weather', require('./routes/weather'))

app.listen(4000, () => {
    console.log('App running on 4000')
})