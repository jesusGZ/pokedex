import React from 'react';
import { TabContent, TabTable, TabTableCell } from '../Details.syled'; // Importa los componentes de estilo desde el archivo DetailsStyled.js

function About({ pokemon }) {
	const types = pokemon.types.map(({ type }) => type.name).join(', ');
	const abilities = pokemon.abilities.map(({ ability }) => {
		return ability.name.replace('-', ' ');
	}).join(', ');
	const height = pokemon.height * 10; // cm
	const weight = pokemon.weight / 10; // kg

	return (
		<TabContent>
			<TabTable>
				<tbody>
					<tr>
						<TabTableCell>Species</TabTableCell>
						<TabTableCell>{types}</TabTableCell>
					</tr>
					<tr>
						<TabTableCell>Height</TabTableCell>
						<TabTableCell>{height}cm</TabTableCell>
					</tr>
					<tr>
						<TabTableCell>Weight</TabTableCell>
						<TabTableCell>{weight}kg</TabTableCell>
					</tr>
					<tr>
						<TabTableCell>Abilities</TabTableCell>
						<TabTableCell>{abilities}</TabTableCell>
					</tr>
				</tbody>
			</TabTable>
		</TabContent>
	);
}

export default About;
