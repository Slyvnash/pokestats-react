import styled from "styled-components";

const CardContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5em;
  text-align: center;
  font-size: 1.1rem;
  text-transform: capitalize;
  font-weight: 900;

  @media only screen and (min-width: 480px) {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    gap: 1em;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;

const CardImage = styled.img`
  width: 75%;
  max-width: 200px;
`;

const Detail = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 2px 0;

  @media only screen and (min-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Ability = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  border-bottom: 2px dotted ${({ theme }) => theme.colors.highlight};
  font-weight: 700;

  &:hover span {
    visibility: visible;
  }

  &.ha {
    font-style: italic;
  }
`;

const AbilityDescriptionContainer = styled.span`
  visibility: hidden;
  position: absolute;
  z-index: 1;
  width: 140px;
  bottom: 100%;
  left: 50%;
  margin-left: -70px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accent};
  text-transform: none;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  padding: 8px;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  height: 100%;
  width: 100%;
`;

const OuterStatBar = styled.div`
  position: relative;
  height: 1.5rem;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 4px;

  @media only screen and (min-width: 480px) {
    height: 2rem;
  }
`;

const InnerStatBar = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${({ theme }) => theme.colors.green};
  opacity: 0.45;
`;

const StatOverlay = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 4px;
  width: 95%;
`;

const StatText = styled.p`
  display: flex;
  justify-content: space-between;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;

  @media only screen and (min-width: 480px) {
    font-size: 0.9rem;
  }
`;

export {
  CardContainer,
  Column,
  CardImage,
  Detail,
  Ability,
  AbilityDescriptionContainer,
  StatsContainer,
  OuterStatBar,
  InnerStatBar,
  StatOverlay,
  StatText,
};
