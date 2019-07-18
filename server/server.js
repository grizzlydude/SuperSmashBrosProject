const express = require('express')
const app = express()
const PORT = 5555
const Randomizer = express('./Randomizer')
app.use(express.json())

app.listen(PORT, () => console.log(`Revenge of the PORT ${PORT}`))
