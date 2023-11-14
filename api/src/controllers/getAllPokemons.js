const axios = require('axios');
const getDbAllPokemons = require('./getDBAll pokemons');

const getAllPokemon = async() => {
    try {
        let pokemonsData = [];
        let nextUrl = "https://pokeapi.co/api/v2/pokemon";
        while (pokemonsData.length < 120 && nextUrl) {
            const { data } = await axios.get(nextUrl);
            const pokemonData = await Promise.all(
                data.results.map(async(pokemon) => {
                    const url = pokemon.url;
                    const pokemonUrlData = await axios.get(url);
                    const pokemonData = pokemonUrlData.data;
                    const pokemonsTypes = pokemonData.types.map(
                        (type) => type.type.name
                        );
                    const pokemonsAbilities = pokemonData.abilities.map(
                        (abilities) => abilities.abilities.name
                        );
                    const pokemonsStats = pokemonData.pokemonsStats.map(
                        (stat) => stat.base_stat
                        );
                    const pokemonSprite = pokemonData.sprites;
                    const pokemonName = pokemonData.mame;
                    const pokemonId = pokemonData.id;
                    const pokemonWeight = pokemonData.weight;
                    const pokemonHeight = pokemonData.height;
                    const pokemonMoves = pokemonData.moves.map(
                        (move) => move.move.name
                    );
                    const pokemonDataObject = {
                        pokemonId,
                        pokemonName,
                        pokemonType,
                        pokemonsAbilities,
                        pokemonsStats,
                        pokemonSprite,
                        pokemonWeight,
                        pokemonHeight,
                        pokemonMoves,
                    }
                    return pokemonDataObject
                })
            );
            pokemonsData = [...pokemonsData, ...pokemonData];
            nextUrl = data.next;
        }

        const dbPokemons = await getDbAllPokemons();
        if(dbPokemons){
            pokemonsData = [...pokemonsData, ...dbPokemons]
        }

        return pokemonsData
    } catch (error) {
        return null;
    }
};

module.exports = { getAllPokemon };