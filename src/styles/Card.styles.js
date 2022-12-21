import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 50%;
  width: 100%;
  gap: 8px;
  text-align: center;
  font-size: 1.1rem;
  text-transform: capitalize;
  font-weight: 900;
  padding: 8px 0;

  @media only screen and (min-width: 640px) and (orientation: landscape) {
    flex-direction: column;
    justify-content: space-between;
    height: 100%; 
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media only screen and (min-width: 640px) and (orientation: landscape) {
    width: 75%
  }
`;

const CardImage = styled.img`
  width: 75%;
  max-width: 200px;

  @media only screen and (min-width: 640px) and (orientation: landscape) {
    width: 100%;
  }
`;

const Detail = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 2px 0;
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
  gap: 12px;
  height: 100%;
  width: 100%;
`;

const OuterStatBar = styled.div`
  position: relative;
  height: 24px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 4px;

  @media only screen and (min-width: 640px) and (orientation: landscape) {
    height: 32px;
  }
`;

const InnerStatBar = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${({ theme }) => theme.colors.highlight};
  opacity: 50%;
`;
const StatOverlay = styled.div`
  position: absolute;
  top: 2px;
  left: 4px;
  width: 100%;

  @media only screen and (min-width: 640px) and (orientation: landscape) {
    top: 4px;
  }
`;

const StatText = styled.p`
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;

  @media only screen and (min-width: 640px) and (orientation: landscape) {
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
