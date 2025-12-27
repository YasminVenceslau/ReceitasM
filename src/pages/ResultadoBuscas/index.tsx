import { useParams, useNavigate } from "react-router-dom"; 
import { receitas } from "../../data/receitas";
import * as S from "./styles";

interface ParametrosBusca extends Record<string, string | undefined> {
  termo?: string;
}

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
    const tags = receita.tags.map(tag => normalizarString(tag.replace("#", "")));
    const ingredientes = receita.ingredientes
      ? Object.values(receita.ingredientes).flat().map(ing => normalizarString(ing)).join(" ")
      : "";

    return (
      nome.includes(termoNormalizado) ||
      ingredientes.includes(termoNormalizado) ||
      categoria === termoNormalizado ||
      tags.includes(termoNormalizado)
    );
  });

  return (
    <S.Container>
      <S.Title>
        Resultados para: <span>{termo}</span>
      </S.Title>

      {receitasFiltradas.length === 0 ? (
        <S.Empty>Nenhuma receita encontrada 😢</S.Empty>
      ) : (
        <S.List>
          {receitasFiltradas.map((receita) => (
            <S.Card key={receita.id} onClick={() => navigate(`/receita/${receita.id}`)}>
              <S.TitleCard>{receita.nome}</S.TitleCard>
              {receita.categoria && <S.CategoryCard>{receita.categoria}</S.CategoryCard>}
            </S.Card>
          ))}
        </S.List>
      )}
    </S.Container>
  );
};
