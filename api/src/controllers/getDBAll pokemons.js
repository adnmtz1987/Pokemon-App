const { Pokemon, Type } = require('../db');

const getDbAllPokemons = async () => {
    try {
        const dBPokemons = await Pokemon.findAll({
            inlcude: Type
        });
        const pokemonObj = dBPokemons.map((pokemon) => {
            const pokemonId = pokemon.id;
            const pokemonName = pokemon.name;
            const pokemonStats = [pokemon.hp, pokemon.attack, pokemon.defense, pokemon.speed];
            const pokemonSprite = {
                front_default: pokemon.image
            }
            const pokemonTypes = pokemon.types.map((type) => type.name)

            const pokemonData = {
                pokemonId,
                pokemonName,
                pokemonStats,
                pokemonSprite,
                pokemonTypes,
                pokemonCreated: true
            }
            return pokemonData;
        })
        return pokemonObj
    } catch (error) {
        return null
    }
}

module.exports = getDbAllPokemons