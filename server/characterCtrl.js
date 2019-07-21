const characters = require('../src/SmashData')

module.exports = {
    // return all characters in SmashData
    getAllCharacters(req, res) {
        let data = characters
        if (req.query.favorites){
            data = data.filter(character => character.favorite)
        }
        res.status(200).json(data)
    },
    
    deleteCharacter(req, res) {
        let index = characters.findIndex(character => {
            return character.id == req.params.id
        })
        if (index < 0) {
            return res.status(404).send('Data not found')
        }
        let deletedCharacters = characters.splice(index, 1)
        if (deletedCharacters.length === 1) {
            res.status(200).send(deletedCharacters[0])
        }
        else {
            res.status(500).send('More than one Character Deleted')
        }
    },

    createCharacter(req, res) {
        characters.sort((a, b) => {
            return b.id - a.id
        })
        req.body.id = characters[0].id + 1
        characters.push(req.body)
        res.status(201).send(req.body)
    },

    editCharacter(req, res) {
        let index = characters.findIndex(character => {
            return character.id == req.params.id
        })
        if (index < 0) {
            return res.status(404).send('Data not found')
        }
        Object.assign(characters[index], req.body)
        res.status(200).send(characters[index])
    },

    // Get only a single Character by Id
    getSingleId(req, res) {
        let character = characters.find(character => {
            return character.id == req.params.id
        })
        if (character) {
            res.status(200).send(character)
        }
        else {
            res.status(404).send('Data not found')
        }
    }
}