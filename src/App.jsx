import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme.styles";
import { useStore } from "./store/store";

const workerFetchAll = new Worker("fetch-worker.js");
workerFetchAll.postMessage({ start: true });

function App() {
  const setIsLoading = useStore((state) => state.setIsLoading)
  const setList = useStore((state) => state.setList);
  const allData = [];

  workerFetchAll.onmessage = (event) => {
    allData.push(event.data.chunkData);
    if (event.data.chunkId === event.data.total) {
      const combinedData = [];
      allData.flat().forEach((call) => {
        combinedData[call.id] = { ...combinedData[call.id], ...call };
      });
      setList(combinedData);
      setIsLoading(false)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
