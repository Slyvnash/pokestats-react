import styled from "styled-components"

const UpArrowSVG = styled.svg`
    position: absolute;
    right: 4px;
    stroke: ${({ theme }) => theme.colors.accent};
    stroke-width: 2;
    height: 100%;
    width: 18px;
`

export {UpArrowSVG}