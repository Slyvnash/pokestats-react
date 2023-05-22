import { useStore } from "../store/store";
import {
  CenterCircle,
  InnerLoadingBar,
  IconContainer,
  LoaderTower,
  LoadingValue,
  OuterCircle,
  OuterLoadingBar,
  SemiCircle,
  TowerContainer,
  LoaderContainer,
} from "../styles/Loader.styles";

export default function Loader() {
const numberLoaded = useStore((state) => state.numberLoaded)
const totalPokemon = 1010
  
  return (
    <LoaderContainer>
      <IconContainer>
        <TowerContainer>
          <LoaderTower speed="7s" />
          <LoaderTower speed="4s" />
          <LoaderTower speed="6s" />
          <LoaderTower speed="3s" />
        </TowerContainer>
        <SemiCircle />
        <OuterCircle />
        <CenterCircle />
          </IconContainer>
          <OuterLoadingBar>
              <InnerLoadingBar length={`${Math.floor(numberLoaded / (totalPokemon * 2) * 100)}%`} />
              <LoadingValue>
              Loading: {Math.floor(numberLoaded / (totalPokemon * 2) * 100) + "%"}
              </LoadingValue>
          </OuterLoadingBar>
    </LoaderContainer>
  );
}
