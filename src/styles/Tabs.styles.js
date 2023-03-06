import styled from "styled-components";

const TabsContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  right: ${(props) => (props.open ? "0" : "-100%")};
  border-radius: 8px 0 0 8px;
  transition: 350ms;
  z-index: 10;
  max-width: 360px;
  width: 80%;
  font-size: 1.25rem;
  align-self: flex-start;


  @media only screen and (max-width: 1279px) and (orientation: landscape) {
    position: absolute;
    right: -1.2em;
    opacity: ${(props) => (props.open ? "1" : "0")};
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
  }

  @media only screen and (max-width: 1279px) and (orientation: portrait) {
    top: 76px;
    position: fixed;
  }

  @media only screen and (min-width: 1280px) {
    width: 360px;
    border-radius: 8px;
  }
`;

const TabList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  margin: 0;

  & li:first-child {
    border-top-left-radius: 8px;
  }

  @media only screen and (min-width: 1280px) {
    & li:last-child {
      border-top-right-radius: 8px;
    }
  }
`;

const TabListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 0.5em 0;
  width: 50%;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const TabBody = styled.article`
  display: flex;
  padding: 0.75em;
`;
const TabContentContainer = styled.section`
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  width: 100%;
  padding: 0.75em;
`;

export { TabsContainer, TabList, TabListItem, TabBody, TabContentContainer };
