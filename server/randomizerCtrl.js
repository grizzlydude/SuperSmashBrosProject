const data = require('../src/SmashData')

module.exports = {
   getCharacters(req, res) {
       const characterArr = []
       const randCharacter = Math.ceil(Math.random() * 15)
        data.get(`data/${randCharacter}`).then(results => {
            characterArr.push(results.data)
        })
   }
}
