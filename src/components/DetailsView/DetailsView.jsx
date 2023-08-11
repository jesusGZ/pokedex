import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePokemons } from '../../context/pokemonsProvider';
import { DetailsViewContainer } from './DetailsView.styled';
import BackButton from '../BackButton';
import Details from '../Details';
import Overlay from '../Overlay';
import Cards from '../Cards';

export default function DetailsView() {
    const { currentPokemon, setCurrentPokemonId } = usePokemons();
    const [isHidden, setIsHidden] = useState(false);

    const closeModal = useCallback(() => {
        setIsHidden(true);
    }, []);

    const handleAnimationEnd = useCallback(() => {
        if (isHidden) {
            setCurrentPokemonId(-1);
        }

        setIsHidden(false);

    }, [isHidden, setCurrentPokemonId]);

    if (!currentPokemon) {
        return null;
    }

    return ReactDOM.createPortal(
        <>
            <Overlay onClick={closeModal} hidden={isHidden} />
            <DetailsViewContainer isHidden={isHidden} onAnimationEnd={handleAnimationEnd}>
                <BackButton onClick={closeModal} />
                <Cards pokemon={currentPokemon} />
                <Details pokemon={currentPokemon} />
            </DetailsViewContainer>
        </>, document.body
    );
}
