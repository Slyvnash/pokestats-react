import styled from "styled-components";

const MenuContainer = styled.div`
  @media only screen and (max-width: 1280px) {
    right: 0;
    top: 0;
    position: absolute;
    transition: 350ms;
    z-index: 10;
    min-width: 280px;
    max-width: 360px;
    width: 80%;
    height: calc(100vh - 96px);
    min-height: 570px;
    max-height: 580px;
    padding: 0px;
    font-size: 1.25rem;
    opacity: ${(props) => (props.open ? "1" : "0")};
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
  }

  @media only screen and (min-width: 1280px) {
    display: block;
    position: static;
    z-index: -100;
    width: 360px;
    z-index: 10;
  }
`;

export { MenuContainer };
