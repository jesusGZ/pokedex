import React, { memo, useState } from 'react';

import { DetailsContainer, PokemonImage, TabsSwitchContainer, TabSwitch, TabContent, ResponsiveStyles, } from './Details.syled';
import { getImageURL } from '../../utils';
import BaseStats from './Tabs/BaseStats';
import Evolution from './Tabs/Evolution';
import About from './Tabs/About';

const tabs = [{ id: TAB_ABOUT, label: 'About' }, { id: TAB_STATS, label: 'Base Stats' }, { id: TAB_EVOLUTION, label: 'Evolution' },];
const TAB_EVOLUTION = 'evolution';
const TAB_STATS = 'base-stats';
const TAB_DEFAULT = TAB_ABOUT;
const TAB_ABOUT = 'about';

function Details({ pokemon }) {
	const [currentTab, setCurrentTab] = useState(TAB_DEFAULT);
	const imgURL = getImageURL(pokemon?.id);

	if (!pokemon) return null;

	// Return tab switch class name.
	const getClassName = (tabName) => (currentTab === tabName ? 'active' : '');
	// Change pokemon data & go to first tab.
	const onPokemonChange = () => { setCurrentTab(TAB_DEFAULT); };

	return (
		<DetailsContainer>
			<PokemonImage src={imgURL} alt={pokemon.name} />
			<TabsSwitchContainer>
				{tabs.map(({ id, label }) => (
					<TabSwitch key={id} className={getClassName(id)} onClick={() => setCurrentTab(id)}>
						{label}
					</TabSwitch>
				))}
			</TabsSwitchContainer>
			<TabContent>
				{(() => {
					switch (currentTab) {
						case TAB_ABOUT:
							return <About pokemon={pokemon} />;

						case TAB_STATS:
							return <BaseStats stats={pokemon.stats} />;

						case TAB_EVOLUTION:
							return <Evolution pokemon={pokemon} onPokemonChange={onPokemonChange} />;

						default:
							return null;
					}
				})()}
			</TabContent>
			<ResponsiveStyles />
		</DetailsContainer>
	);
}

export default memo(Details);
