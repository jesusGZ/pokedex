import { memo } from 'react';
import './BackButton.scss';

function BackButton({ onClick }) {
    return <div className="back-button" onClick={onClick} />;
}

export default memo(BackButton);
