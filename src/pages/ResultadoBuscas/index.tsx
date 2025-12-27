// import { useEffect } from 'react'; // 👈 REMOVIDO: Não precisamos mais do useEffect
import { useParams, useNavigate } from "react-router-dom"; 
import { receitas } from "../../data/receitas";
// import { RecipePreview } from "../../components/ReceitaPrevia"; 
import * as S from "./styles";

interface ParametrosBusca {
  termo?: string;
}

// Garante que a comparação seja insensível a maiúsculas/minúsculas e espaços.
const normalizarString = (str: string) => str.toLowerCase().trim();

export const ResultadoBusca = () => {
  const { termo } = useParams<ParametrosBusca>();
  const navigate = useNavigate();

  if (!termo) {
    return (
      <S.Container>
        <S.Title>Nenhum termo de busca fornecido</S.Title>
      </S.Container>
    );
  }

  const termoNormalizado = normalizarString(termo);

  const receitasFiltradas = receitas.filter((receita) => {
    const nome = normalizarString(receita.nome);
    const categoria = normalizarString(receita.categoria);

    // Normaliza as tags (remove '#')
    const tags = receita.tags.map(tag =>
      normalizarString(tag.replace("#", ""))
    );

    // Junta todos os ingredientes em uma única string para busca
    const ingredientes = receita.ingredientes
      ? Object.values(receita.ingredientes)
          .flat()
          .map(ing => normalizarString(ing))
          .join(" ")
      : "";

    // LÓGICA DE BUSCA: Busca parcial no Nome/Ingredientes, Exata na Categoria/Tags
    return (
      nome.includes(termoNormalizado) ||
      ingredientes.includes(termoNormalizado) ||
      categoria === termoNormalizado ||
      tags.includes(termoNormalizado)
    );
  });
  
  // 🛑 REMOVEMOS O REDIRECIONAMENTO E O BLOCO DO useEffect.
  // A renderização sempre continua a partir daqui, exibindo a lista.

  return (
    <S.Container>
      <S.Title>
        Resultados para: <span>{termo}</span>
      </S.Title>

      {receitasFiltradas.length === 0 ? (
        <S.Empty>Nenhuma receita encontrada 😢</S.Empty>
      ) : (
        // Se houver zero, um ou mais resultados, sempre renderizamos a lista (S.List)
        <S.List>
          {receitasFiltradas.map((receita) => (
            // Usa o S.Card para exibir o resultado, clicável para navegar
            <S.Card 
              key={receita.id} 
              onClick={() => navigate(`/receita/${receita.id}`)}
            >
              <S.TitleCard>{receita.nome}</S.TitleCard>
              
              {receita.categoria && (
                <S.CategoryCard>{receita.categoria}</S.CategoryCard>
              )}
            </S.Card>
          ))}
        </S.List>
      )}
    </S.Container>
  );
};