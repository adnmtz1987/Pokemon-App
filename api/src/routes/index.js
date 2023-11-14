const { Router } = require('express');
const pokemonRouter = require('./pokemon');
const typeRouter = require('./types');


const router = Router();

router.use('/pokemon', pokemonRouter)
router.use('/types', typeRouter)


module.exports = router;
