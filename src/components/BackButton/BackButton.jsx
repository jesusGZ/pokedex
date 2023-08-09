import { memo } from 'react';
import { BackButtons } from './BackButton.styled';

function BackButton({ onClick }) {
    return <BackButtons onClick={onClick} />;
}

export default memo(BackButton);
