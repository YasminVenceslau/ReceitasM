import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { NavBar } from "./components/NavBar";
import { ListaReceitas } from "./components/RecipeCard/listaReceitas";
import { GlobalCSs } from "./styles/global";
import { theme } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import { ReceitaPage } from "./pages/ReceitaPage";
import { ReceitaList } from "./pages/ReceitasList";
import { ResultadoBusca } from "./pages/ResultadoBuscas";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSs />

      <Header />
      <NavBar />

      <Routes>
        {/* 1. Rota de Home (Exata) */}
        <Route path="/" element={<ListaReceitas />} /> 
        
        {/* 2. Rota de Detalhe de Receita (Mais Específica) */}
        <Route path="/receita/:id" element={<ReceitaPage />} /> 
        
        {/* 3. Rota de Lista por Tag (Genérica, deve ser a última) */}
        <Route path="/:tag" element={<ReceitaList />} /> 
        <Route path="/buscar/:termo" element={<ResultadoBusca />} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;