const BASE_URL = 'https://pokeapi.co/api/v2/';

export async function getPokemons(limit, offset) {
    try {
        const response = await fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export async function getPokemonDetails(pokemonId) {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemonId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export async function getEvolutionsChain(pokemonId) {
    try {
        const response = await fetch(`${BASE_URL}pokemon-species/${pokemonId}`);
        const species = await response.json();

        const evolutionChainId = species.evolution_chain.url.match(/\/(\d+)\//)[1];

        const response_2 = await fetch(`${BASE_URL}evolution-chain/${evolutionChainId}`);
        const evalution = await response_2.json();
        return evalution;
    } catch (error) {
        return error;
    }
}