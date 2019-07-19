const express = require('express')
const app = express()
const PORT = 5555
// const randomizerCtrl = require('./randomizerCtrl')
const characterCtrl = require('./characterCtrl')

app.use(express.json())

app.get('/api/smashdata', characterCtrl.getAllCharacters)
app.get('/api/smashdata/:id', characterCtrl.getSingleId)

app.post('/api/smashdata', characterCtrl.createCharacter)

app.delete('/api/smashdata/:id', characterCtrl.deleteCharacter)

app.put('/api/smashdata/:id', characterCtrl.editCharacter)

app.listen(PORT, () => console.log(`Revenge of the PORT ${PORT}`))

