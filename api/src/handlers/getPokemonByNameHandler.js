const { getPokemonByName } = require('../controllers/getPokemonByName');

const getPokemonByNameHandler = async(req, res) => {
    const { name } = req.params;
    try {
        const response = await getPokemonByName(name);
        if(!response){
            return res.status(404).send('No Pokémon found with that name');
        }
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}

module.exports = { getPokemonByNameHandler };