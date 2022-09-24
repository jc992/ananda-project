import { ThemeProvider } from "@mui/material";
import { base } from "./themes/base";
import { Home } from "./pages/Home";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={base}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
