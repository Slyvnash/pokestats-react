import { MainContainer, HRule } from "../styles/Main.styles";
import Menu from "./Menu";
import Card from "./Card";
import { useStore } from "../store/store";

export default function Main() {
  const isLoading = useStore((state) => state.isLoading);

  if (isLoading)
    return (
      <>
        <MainContainer>
        <Menu />
          Loading...
        </MainContainer>
      </>
    );

  return (
    <>
      <MainContainer>
      <Menu />
        <Card id={1} />
        <HRule />
        <Card id={2} />
      </MainContainer>
    </>
  );
}
