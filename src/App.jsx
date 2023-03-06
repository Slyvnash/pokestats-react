import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme.styles";
import { useStore } from "./store/store";
import { Backdrop } from "./styles/Backdrop.styles";
import { useAtom } from "jotai";
import { menuAtom } from "./atoms/menu-atom";

const workerFetchAll = new Worker("fetch-worker.js");
workerFetchAll.postMessage({ start: true });

function App() {
  const setIsLoading = useStore((state) => state.setIsLoading);
  const isLoading = useStore((state) => state.isLoading)
  const setList = useStore((state) => state.setList);
  const setNumberLoaded = useStore((state) => state.setNumberLoaded);
  const allData = [];

  workerFetchAll.onmessage = (event) => {
    allData.push(event.data.chunkData);
    setNumberLoaded(event.data.chunkData.length);
    if (event.data.chunkId === event.data.total) {
      const combinedData = [];
      allData.flat().forEach((call) => {
        combinedData[call.id] = { ...combinedData[call.id], ...call };
      });
      setList(combinedData);
      setIsLoading(false);
    }
  };

  const [toggle, setToggle] = useAtom(menuAtom);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {toggle && !isLoading && <Backdrop onClick={handleClick} />}
        <Header />
        <Main />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
