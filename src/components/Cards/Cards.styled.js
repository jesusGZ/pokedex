import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 1rem;
    height: 100%;
    cursor: pointer;
`;

export const Card = styled.div`
    background-color: var( --color );
    color: #FFF;
    box-shadow: 0 0 20px 0 var( --color );
    border-radius: 3rem;
    overflow: hidden;
    height: 100%;
    padding: 3rem 1rem 3rem 3rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    will-change: box-shadow, transform;
    transition: .3s all;

    img{
        max-width: 100%;
        max-height: 100%;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, .2));
    }

     @media screen and(max-width: 500px){
        :not( .details-view)   {
            align-items: flex-start;
            justify-content: space-between;
            height: 40vh;
            padding: 2rem;
        } 
    }

    @media screen and(min-width: 1024px){
        &:hover{
            transform: translateY(-5px);
            box-shadow: 0 0 20px 5px var(--color);
        }
    }
`;

export const CardTitle = styled.div`
    align-self: flex-start;

    h2{
    text-transform: capitalize;
    margin: 0;
    font-size: 2rem;
}

 @media screen and(max-width: 500px){
        h2{
            font-size: 1.2rem;
        }
    }
`;

export const PokemonTypes = styled.div`
    margin-top: 1rem;

    span {
    border-radius: 100rem;
    display: table;
    background-color: rgba( 255,255,255,.2 );
    padding: .3rem .7rem;
    text-align: center;
    margin-bottom: .5rem;
    text-transform: capitalize;
}
`;

export const PokemonImage = styled.div`
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 50%;
`;

export const PokemonId = styled.div`
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 2.5rem;
    color: rgba(255, 255, 255, .2);

     @media screen and(max-width: 500px){      
            font-size: 2rem;
            top: 20px;
            right: 20px; 
    }
`;

