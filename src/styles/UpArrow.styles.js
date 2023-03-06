import styled from "styled-components"

const UpArrowSVG = styled.svg`
    stroke: ${({ theme }) => theme.colors.accent};
    stroke-width: 2;
    height: 100%;
    width: 1.1rem;

    @media only screen and (min-width: 768px) {
      width: 1.25rem;
    }
`

export {UpArrowSVG}