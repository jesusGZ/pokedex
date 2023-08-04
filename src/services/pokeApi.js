import { BASE_URL, IMAGES_URL } from "../constants";

export async function getPokemons(limit, offset) {
    try {
        const response = await fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export async function getImageURL(pokemonId) {
    try {
        if (parseInt(pokemonId) >= 650) { return `${IMAGES_URL}/official-artwork/${pokemonId}.png`; }

        return `${IMAGES_URL}/dream-world/${pokemonId}.svg`;
    } catch (error) {
        return error;
    }
};

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

export async function getGenerations(id) {
    try {
        const response = await fetch(`${BASE_URL}generation/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}