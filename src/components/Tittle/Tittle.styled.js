import styled from "styled-components";

export const Tittles = styled.div`
 text-decoration: underline red;   
    text-align: center; 
    position: relative;
  h1{
    font-size: 3rem;
  }
    .logo {
        height: 0.8em; 
        will-change: filter;
        transition: filter 300ms;  
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.react:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
      }
      
      @keyframes logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      @media (prefers-reduced-motion: no-preference) {
        a:nth-of-type(2) .logo {
          animation: logo-spin infinite 20s linear;
        }
      }
`; 