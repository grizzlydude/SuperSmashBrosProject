const characters = require('../src/SmashData')
// let sample = [
//     {
//         id: 1,
//         name: 'Mario',
//         difficulty: 'Beginner',
//         image: 'https://www.smashbros.com/wiiu-3ds/sp/images/character/mario/main.png'
//     },
//     {
//         id: 2,
//         name: 'Samus',
//         difficulty: 'Beginner',
//         image: 'https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/250px-Samus_SSBU.png'
//     },
//     {
//         id: 3,
//         name: 'Peach',
//         difficulty: 'Beginner',
//         image: 'https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/250px-Peach_SSBU.png'
//     }
// ]

module.exports = {
    // return all characters in SmashData
    getAllCharacters(req, res) {
        res.status(200).send(characters)
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
    // Add to the Favorites array
    // addFavorite(req, res) {

    // },

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