import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
  position: relative;
  width: 100%;
  height: calc(100vh - 96px);
  min-height: 570px;
  max-height: 656px;

  @media only screen and (min-width: 1280px) {
    justify-content: center;
    flex-direction: row-reverse;
    gap: 24px;
  }
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 90%;
  max-width: 767px;
  margin: 0 auto;
  height: 100%;
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  @media only screen and (min-width: 640px) and (orientation: landscape) {
    flex-direction: row;
  }

  @media only screen and (min-width: 1280px) {
    margin: 0;
  }
`;

const HRule = styled.hr`
  width: 90%;
  border-top: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 2px;
  margin: 0 auto;

  @media only screen and (min-width: 640px) and (orientation: landscape) {
    display: none;
  }
`;

export { MainContainer, DisplayContainer, HRule };
