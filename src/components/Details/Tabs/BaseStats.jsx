import { TabContent, TabTable, TabTableCell } from '../Details.syled'; // Importa los componentes de estilo desde el archivo DetailsStyled.js
import RangeView from '../../RangeView';

const labels = ['HP', 'Ataque', 'Defensa', 'Vel. Atk', 'Vel. Def', 'Velocidad',];

function BaseStats({ stats }) {
	const total = stats.reduce((sum, current) => sum + parseInt(current.base_stat), 0);

	return (
		<TabContent>
			<TabTable>
				<tbody>
					{labels.map((label, i) => (
						<tr key={label}>
							<TabTableCell>{label}</TabTableCell>
							<TabTableCell>
								{stats[i].base_stat}
								<RangeView value={stats[i].base_stat} />
							</TabTableCell>
						</tr>
					))}
					<tr>
						<TabTableCell><td>Total</td></TabTableCell>
						<TabTableCell>
							{total}
							<RangeView value={total} max="600" />
						</TabTableCell>
					</tr>
				</tbody>
			</TabTable>
		</TabContent>
	);
}

export default BaseStats;
