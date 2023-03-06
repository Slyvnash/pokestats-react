import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.accent};
  opacity: 0.3;
  z-index: 5;

  @media only screen and (min-width: 1280px) {
    display: none;
  }
`;

export { Backdrop };
