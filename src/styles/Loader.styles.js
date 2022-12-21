import styled from "styled-components";
import { TowerAnimation } from "./animations/Tower.animation";

const LoaderContainer = styled.div`
display: flex;
flex-direction: column;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  width: 240px;
  height: 240px;
`;

const TowerContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 50%;
  width: 100%;
`;

const LoaderTower = styled.div`
  width: 25%;
  animation: ${TowerAnimation} ${props => props.speed} linear infinite;
  background-color: ${({ theme }) => theme.colors.main};
`;

const SemiCircle = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 0 0 480px 480px;
`;

const OuterCircle = styled.div`
  position: absolute;
  z-index: 10;
  width: 96px;
  height: 96px;
  border-radius: 96px;
  top: calc(50% - 48px);
  left: calc(50% - 48px);
  background-color: ${({ theme }) => theme.colors.white};
`;

const CenterCircle = styled.div`
  position: absolute;
  z-index: 20;
  width: 64px;
  height: 64px;
  border-radius: 64px;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  background-color: ${({ theme }) => theme.colors.main};
`;

const OuterLoadingBar = styled.div`
position: relative;
margin-top: 24px;
width: 240px;
height: 36px;
border: 4px solid ${({ theme }) => theme.colors.main};
border-radius: 4px;
`

const InnerLoadingBar = styled.div`
    height: 100%;
    width: ${(props) => props.length};
    background-color: ${({ theme }) => theme.colors.highlight};
    z-index: -2;
`

const LoadingValue = styled.div`
    position: absolute;
    width: 100%;
    color: ${({theme}) => theme.colors.white};
    text-align: center;
    font-size: 1.5rem;
    font-weight: 900;
    top: -2px;
    text-shadow: 0 0 4px ${({theme}) => theme.colors.black}

`

export {
    LoaderContainer,
  IconContainer,
  TowerContainer,
  LoaderTower,
  SemiCircle,
  OuterCircle,
    CenterCircle,
    OuterLoadingBar,
    InnerLoadingBar,
  LoadingValue
};
