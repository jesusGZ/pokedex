import styled, { keyframes } from 'styled-components';

const fillAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: var(--percent);
  }
`;

export const RangeViews = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100rem;
  overflow: hidden;
  height: 5px;
  margin: 0 10px;
  position: relative;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: var(--percent);
    position: absolute;
    left: 0;
    top: 0;
    border-radius: inherit;
    background-color: #000;
    animation: ${fillAnimation} 0.3s backwards;
  }

  &.range-view-positive::after {
    background-color: #5bc686;
  }

  &.range-view-negative::after {
    background-color: #fb7171;
  }
`;