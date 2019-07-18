const express = require('express')
const app = express()
const PORT = 5555
const data = require('../src/SmashData')
// const randomizerCtrl = express('./randomizerCtrl')
const characterCtrl = express('./characterCtrl')

app.use(express.json())

// app.get('/api/smashbros', characterCtrl.getAllCharacters)
app.get(data, characterCtrl.getFavorites)
app.listen(PORT, () => console.log(`Revenge of the PORT ${PORT}`))

