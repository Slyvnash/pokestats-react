import { MainContainer, DisplayContainer, HRule } from "../styles/Main.styles";
import Menu from "./Menu";
import Card from "./Card";
import { useStore } from "../store/store";
import Loader from "./Loader";

export default function Main() {
  const isLoading = useStore((state) => state.isLoading);

  if (isLoading || !isLoading)
    return (
      <>
        <MainContainer>
          <DisplayContainer>
          <Loader />
          </DisplayContainer>
        </MainContainer>
      </>
    );

  return (
    <>
      <MainContainer>
        <Menu />
        <DisplayContainer>
          <Card id={1} />
          <HRule />
          <Card id={2} />
        </DisplayContainer>
      </MainContainer>
    </>
  );
}
