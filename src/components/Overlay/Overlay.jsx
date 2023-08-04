import ReactDOM from 'react-dom';
import { memo } from 'react';

import './Overlay.scss';

function Overlay({ onClick, hidden }) {
	return ReactDOM.createPortal(<div onClick={onClick} className={`overlay ${hidden && 'hidden'}`} />, document.body,);
}

export default memo(Overlay);
