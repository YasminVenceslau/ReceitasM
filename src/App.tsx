import { ThemeProvider } from "styled-components";

import { Header } from "./components/header";
import { NavBar } from "./components/NavBar";
import { ListaReceitas } from "./components/RecipeCard/listaReceitas";

import { GlobalCSs } from "./styles/global";
import { theme } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import { ReceitaPage } from "./pages/ReceitaPage";
import { ReceitaList } from "./pages/ReceitasList";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSs />

      <Header />
      <NavBar />

      <Routes>
        <Route path= "/" element={<ListaReceitas />} />
        <Route path="/receita/:id" element={<ReceitaPage  />} />
        <Route path="/tag/:tag" element={<ReceitaList />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
