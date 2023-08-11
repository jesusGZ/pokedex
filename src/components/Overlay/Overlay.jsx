import React, { memo } from 'react';
import ReactDOM from 'react-dom';

import { OverlayContainer } from './Overlay.styled.js';

function Overlay({ onClick, hidden }) {
	return ReactDOM.createPortal(
		<OverlayContainer onClick={onClick} className={`overlay ${hidden && 'hidden'}`} />, document.body
	);
}

export default memo(Overlay);