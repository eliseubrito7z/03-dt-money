import { ThemeProvider } from "styled-components";
import { Transations } from "./pages/Transations";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return ( 
    <ThemeProvider  theme={defaultTheme}>
      <GlobalStyle />
      <Transations />
    </ThemeProvider>
  )
    
}

