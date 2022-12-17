import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 24px;
  width: 90%;
  margin: 0 auto;
  height: calc(100vh - 96px);
  min-height: 570px;
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  @media only screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

const HRule = styled.hr`
width: 90%;
border-top: 2px solid ${({ theme }) => theme.colors.main};
border-radius: 2px;
margin: 0 auto;

@media only screen and (min-width: 640px) {
  display: none;
}
`

export { MainContainer, HRule };
