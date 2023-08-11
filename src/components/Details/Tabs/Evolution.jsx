import { useEvolutionChain } from '../../../hooks';
import EvolutionItem from '../../EvolutionItem';
import { Loader } from '../../Loader';

function Evolution({ pokemon, onPokemonChange }) {
	const { isLoading, evolutionChain } = useEvolutionChain(pokemon.id);

	return (
		<div className="tab tab-evolution">
			<h3>Evolución Chain</h3>
			{isLoading && <Loader />}
			{!isLoading && !evolutionChain.length && <div>Este pokemón no evoluciona.</div>}
			{!isLoading && evolutionChain.map((evolution) => (
				<EvolutionItem key={`${evolution.currentId}-${evolution.nextId}`} onPokemonChange={onPokemonChange}{...evolution} />
			))}
		</div>
	);
}

export default Evolution;
