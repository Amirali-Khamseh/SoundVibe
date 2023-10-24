import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/Global";
import HomePage from "./pages/Home";
import Header from "./components/Header/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
