import pokemonModel from "../models/pokemon.model.js";

const trouverPokemonId = async (req, res) => {
    if(req.params.id == null || req.params.id <= 0){
        res.status(400);
        res.send({
            message: "Le id du pokemon n'est pas valide : " + req.params.id
        });
        return;
    }

    try {
        // Appel à la fonction getSalutation dans le modèle
        const pokemon = await pokemonModel.getPokemonId(req.params.id);

        // OK - on retourne l'objet salutaion
        res.send(pokemon);

    } catch (erreur) {
        // S'il y a eu une erreur au niveau de la requête, on retourne un erreur 500 car 
        //  c'est du serveur que provient l'erreur.
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            message: "Echec lors de la récupération du pokemon avec l'id " + req.params.id
        });
    };
};

export {
    trouverPokemonId
}