import styled from "styled-components";

const MenuButtonSVG = styled.svg`
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.white};

  &:hover {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;

export {MenuButtonSVG}
