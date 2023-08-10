import React from 'react';

import { RangeViews } from './RangeView.styled';

function RangeView({ value = 50, max = 100 }) {
	const percent = parseInt(value) / parseInt(max) * 100;
	const colorClass = percent >= 50 ? 'range-view-positive' : 'range-view-negative';

	return (<RangeViews className={`range-view ${colorClass}`} style={{ '--percent': `${percent}%` }} />);
}

export default RangeView;
