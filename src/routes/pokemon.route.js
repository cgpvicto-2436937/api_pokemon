import express from 'express';
import { trouverPokemonId } from '../controllers/pokemon.controller.js';
// Nous créons un objet router qui va nous permettre de gérer les routes
const router = express.Router();

router.get('/api/pokemons/:id', trouverPokemonId);
//router.get('/api/pokemon/liste', trouverListe)

export default router;