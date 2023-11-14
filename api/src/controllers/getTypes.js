const axios = require('axios');
const { Type } = require('../db');

const getAllTypes = async() => {
    try {
        const dbTypes = await Type.findAll()
        if(dbTypes.length) return dbTypes.map(type => type.name)

        const { data } = await axios("https://pokeapi.co/api/v2/type")
        const types = data.results.map(type => type.name)

        await Type.bulkCreate(type.map(type => ({name:type})))

        return types
    } catch (error) {
        return null
    }
}

module.exports = { getAllTypes }