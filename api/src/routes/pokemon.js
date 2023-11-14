const { Router } = require('express')
const { getPokemonByNameHandler } = require('../handlers/getPokemonByNameHandler');
const { getAllPokemonHandler } = require('../handlers/getAllPokemonsHandler');
const { getPokemonByIdHandler } = require('../handlers/getPokemonByIdHandler');
const { postPokemonHandler } = require('../handlers/postPokemonHandler');
const { updatePokemonHandler } = require('../handlers/updatePokemonHandler');
const { deletePokemonHandler } = require('../handlers/deletePokemonHandler');

const pokemonRouter = Router()

pokemonRouter.get('/search', getPokemonByNameHandler);
pokemonRouter.get('/', getAllPokemonHandler);
pokemonRouter.get('/:id', getPokemonByIdHandler);
pokemonRouter.post('/', postPokemonHandler);
pokemonRouter.patch('/:name', updatePokemonHandler);
pokemonRouter.delete(':name', deletePokemonHandler);

module.exports = pokemonRouter