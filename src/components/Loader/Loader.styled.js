import styled from "styled-components";

export const Loaders = styled.div`
    font-size: 1.7rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15vh 0;
    flex-direction: column;

    &::before{
        content: '';
        display: block;
        height: 2em;
        width: 2em;
        border: .6em solid #FB6C6C;
        border-radius: 100%;
        margin-bottom: 10px;
        clip-path: polygon( 0 0, 0 40%, 50% 40%, 50% 60%, 0 60%, 0 100%, 100% 100%, 100% 60%, 50% 60%, 50% 40%, 100% 40%, 100% 0 );
        animation: spin .5s infinite ease-in-out;
    }

    &::after{
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        margin-top: -1.6em;
        height: 1.2em;
        width: 1.2em;
        background-color: #CCC;
        border-radius: 100%;
    }
`;