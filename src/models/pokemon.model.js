import pool from '../config/db_pg.js';

const getPokemonId = async (id) => {
    const requete = `SELECT id, nom, type_primaire, type_secondaire, pv, attaque, defense 
                     FROM pokemon WHERE id = $1`;
    const params = [id];

    try {
        const resultats = await pool.query(requete, params);
        console.log('Résultats:', resultats.rows); // ← ajoutez cette ligne
        // rows[0] retourne l'objet directement, ou undefined si aucun résultat
        return resultats.rows[0] ?? null;
    } catch (erreur) {
        // Propriétés d'erreur correctes pour node-postgres (pg)
        console.log(`Erreur, code: ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
};

export default {
    getPokemonId
}