import styled, { keyframes } from 'styled-components';

const pullUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const DetailsContainer = styled.div`
  background-color: #FFF;
  color: #333;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  border-radius: 3rem;
  padding: 2rem;
  position: relative;
  z-index: 2;
  animation: 0.3s ${pullUpAnimation} both ease-out 0.2s;
`;

export const PokemonImage = styled.img`
  position: absolute;
  bottom: 100%;
  margin-bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 30%;
  height: auto;
  max-height: 20vh;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
  animation: 0.3s ${fadeAnimation} ease-out 0.5s both;
`;

export const TabsSwitchContainer = styled.div`
  margin-bottom: 0.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
`;

export const TabSwitch = styled.button`
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  font-family: inherit;
  padding: 1rem 1rem;
  position: relative;
  color: rgba(0, 0, 0, 0.2);
  outline: none;
  transition: 0.3s all;

  &:hover,
  &.active {
    color: inherit;
  }

  &.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    top: 100%;
    margin-top: -0.5px;
    left: 0;
    position: absolute;
    background-color: #6C79DB;
  }
`;

export const TabContent = styled.div`
  max-height: 45vh;
  overflow-y: auto;
`;

export const TabTable = styled.table`
  width: 100%;
`;

export const TabTableCell = styled.td`
  padding: 0.5rem;
  text-transform: capitalize;

  &:first-child {
    width: 20%;
  }

  &:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
  }
`;

export const RangeView = styled.div`
  width: 90%;
`;

export const TabEvolution = styled.div`
  --gap: 40px;

  display: flex;
  flex-direction: column;
  gap: var(--gap);

  .loader {
    padding: 1em;
    margin-top: calc(-1 * var(--gap));
  }
`;

export const ResponsiveStyles = styled.div`
  @media screen and (max-width: 500px) {
    ${TabSwitch} {
      padding: 0.5rem;
      font-size: 0.8rem;
    }

    ${TabContent} {
      font-size: 0.8rem;
    }
  }
`;
