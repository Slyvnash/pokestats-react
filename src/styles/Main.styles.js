import styled from "styled-components";

const MainContainer = styled.article`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1280px;

  @media only screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    gap: 2em;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1279px) and (orientation: landscape) {
    flex-direction: row-reverse;
  }
`;

const DisplayContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25em;
  gap: 1.25em;
  width: 100%;
  min-width: 327px;
  max-width: 868px;
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  @media only screen and (max-width: 1279px) {
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 2em;
  }
`;

const HRule = styled.hr`
  width: 90%;
  border-top: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 2px;
  margin: 0;

  @media only screen and (min-width: 768px){
    display: none;
  }
`;

export { MainContainer, DisplayContainer, HRule };
