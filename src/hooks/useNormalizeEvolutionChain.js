import { useMemo } from 'react';

import { normalizeEvolutionChain } from '../utils';

const useNormalizeEvolutionChain = ({ chain, id }) => {
	return useMemo(() => { return { evolutionChain: chain ? normalizeEvolutionChain(chain) : [] }; }, [id]);
};

export default useNormalizeEvolutionChain;
