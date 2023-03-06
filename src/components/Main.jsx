import { MainContainer, DisplayContainer, HRule } from "../styles/Main.styles";
import TabsMenu from "./TabComponents/TabsMenu";
import Card from "./Card";
import { useStore } from "../store/store";
import Loader from "./Loader";

export default function Main() {
  const isLoading = useStore((state) => state.isLoading);

  if (isLoading)
    return (
        <MainContainer>
          <DisplayContainer>
          <Loader />
          </DisplayContainer>
        </MainContainer>
    );

  return (
      <MainContainer>
        <TabsMenu />
        <DisplayContainer>
          <Card id={1} />
          <HRule />
          <Card id={2} />
        </DisplayContainer>
      </MainContainer>
  );
}
