const express = require('express')
const app = express()
const PORT = 5555
const RandomizerCtrl = express('./RandomizerCtrl')
const FavoritiesCtrl = express('./FavoritiesCtrl')

app.use(express.json())

app.listen(PORT, () => console.log(`Revenge of the PORT ${PORT}`))
