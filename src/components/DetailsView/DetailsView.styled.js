import styled, { keyframes } from 'styled-components';

const pullUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const pullDownAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

export const DetailsViewContainer = styled.div`
  max-height: 100vh;
  max-width: 800px;
  width: 95vw;
  bottom: 0;
  left: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  z-index: 99999;
  background-color: #fff;
  border-radius: 3rem;

  animation: ${props => (props.isHidden ? pullDownAnimation : pullUpAnimation)} 0.3s both ease-out;
  
  &.hidden {
      animation: ${pullDownAnimation} 0.3s both ease-out;
    }

  .card-container {
    cursor: auto;
    margin: 0;
    padding: 0;
    height: auto;
    transform: translateY(40px);
    margin-top: -40px;
    position: relative;
    z-index: 1;
    pointer-events: none;

    .card {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      padding-bottom: 25vmin;
      padding-top: 5vmin;
      justify-content: center;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

      .card-title {
        span.type {
          display: inline-block;
          margin-right: 5px;
        }
      }

      .pokemon-image {
        display: none;
      }
    }

    @media screen and (max-width: 800px) {
      .card-title {
        align-self: center;
      }
    }
  }
`;