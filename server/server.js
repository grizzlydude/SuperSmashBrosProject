const express = require('express')
const app = express()
const PORT = 5555
// const randomizerCtrl = require('./randomizerCtrl')
const characterCtrl = require('./characterCtrl')

app.use(express.json())
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    console.log(``)
    for (const key in req.query){
        console.log(key + '=' + req.query[key])
    }
    console.log('')
    for (const key in req.headers) {
        console.log(key + ': ' + req.headers[key])
    }
    console.log('')
    console.log(req.body)
    next()
})

app.get('/api/smashdata', characterCtrl.getAllCharacters)
app.get('/api/smashdata/:id', characterCtrl.getSingleId)

app.post('/api/smashdata', characterCtrl.createCharacter)
// app.post('/api/smashdata/favorite', characterCtrl.addFavorite)

app.delete('/api/smashdata/:id', characterCtrl.deleteCharacter)

app.put('/api/smashdata/:id', characterCtrl.editCharacter)

app.listen(PORT, () => console.log(`Revenge of the PORT ${PORT}`))

