import { extractIdOfText } from '../constants/regex';
import generations from '../constants/generations';
import { baseURL } from '../constants';

/**
 * Recursively iterate over an evolution chain and normalize into an array.
 *
 * @param {Object} evolution - Evolution object from API.
 *
 * @returns {array}
 */
export const normalizeEvolutionChain = (evolution) => {
    if (!evolution.evolves_to.length) return [];

    const triggersDisplayName = { 'level-up': 'Lvl', trade: 'Trade', 'use-item': 'Use', };

    const extractId = (url) => url.match(extractIdOfText)[1];

    return evolution.evolves_to.reduce((carry, nextEvolution) => {

        const details = nextEvolution.evolution_details[0];
        const currentId = extractId(evolution.species.url);
        const nextId = extractId(nextEvolution.species.url);

        carry.push({
            currentId, nextId, currentName: evolution.species.name, nextName: nextEvolution.species.name,
            currentImage: getImageURL(currentId), nextImage: getImageURL(nextId), trigger: triggersDisplayName[details.trigger.name],
            triggerValue: details.min_level || details.min_happiness || details.item?.name.replace('-', ' ') || '',
        });

        carry.push(...normalizeEvolutionChain(nextEvolution));

        return carry;
    }, []);
};

/**
 * Get pokemon image by id.
 *
 * @param {string} pokemonId
 *
 * @returns {string}
 */
export const getImageURL = (pokemonId) => {
    // Has only PNG.
    if (parseInt(pokemonId) >= 650) return `${baseURL}/official-artwork/${pokemonId}.png`;
    // Has SVG.
    return `${baseURL}/dream-world/${pokemonId}.svg`;
};

/**
 * Get generation object by pokemon ID.
 *
 * @param {number} id - Pokemon ID.
 *
 * @returns {Object}
 */
export const getGenerationByPokemonId = (id) => {
    return generations.find(({ offset, limit }) => {
        const firstId = offset + 1;
        const lastId = firstId + limit;
        return id >= firstId && id <= lastId;
    });
};
