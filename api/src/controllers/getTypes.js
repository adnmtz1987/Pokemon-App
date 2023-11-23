const axios = require('axios');
const { Type } = require('../db.js');  

const getAllTypes = async () => {
    try {
        const dbTypes = await Type.findAll()
        if(dbTypes.length) return dbTypes.map(type => type.name)

        const { data } = await axios("https://pokeapi.co/api/v2/type")
        const types = data.results.map(type => type.name)
        
        const newType = ['Volador']

        types.push(newType)//poder agregar nuevos typos de manera manual, buscar para que el usuario pueda crear nuevos tipos desde el front
        

        await Type.bulkCreate(types.map(type => ({name: type}))) 



        return types
    } catch (error) {
        return null
    }
}

module.exports = {getAllTypes};