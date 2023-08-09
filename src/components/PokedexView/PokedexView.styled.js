import styled from "styled-components";

export const PokedexViews = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat( 1, 1fr );

    @media screen and ( min-width: 800px ){
        grid-template-columns: repeat( 2, 1fr );
    }

    @media screen and ( min-width: 1200px ){
        grid-template-columns: repeat( 3, 1fr );
    }

    @media screen and ( min-width: 1920px ){
        grid-template-columns: repeat( 4, 1fr );
    }
`;