import styled from "styled-components";

const MenuContainer = styled.div`
display: flex;
justify-content: center;
position: absolute;
right: -5vw;
top: 0px;
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
opacity: ${props => props.open ? "1" : "0"};
visibility: ${props => props.open ? "visible" : "hidden"}
`;

export { MenuContainer };
