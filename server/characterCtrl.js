// const data = require('../src/SmashData')
let sample = [
    {
        id: 1,
        name: 'Mario',
        difficulty: 'Beginner',
        image: 'https://www.smashbros.com/wiiu-3ds/sp/images/character/mario/main.png'
    },
    {
        id: 2,
        name: 'Samus',
        difficulty: 'Beginner',
        image: 'https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/250px-Samus_SSBU.png'
    },
    {
        id: 3,
        name: 'Peach',
        difficulty: 'Beginner',
        image: 'https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/250px-Peach_SSBU.png'
    }
]

module.exports = [
    // return all characters in SmashData
    getAllCharacters(req, res) {
        res.status(200).send(sample)
    },
    // Add to the Favorites array
    // addFavorite(req, res) {

    // },
    // deleteCharacter(req, res) {

    // },
    // createCharcter(req, res) {

    // },
    // editCharacter(req, res) {

    // },
    // Get only the favorites array
    getFavorites(req, res) {
        res.status(200).send(sample)
    }
]