import { useParams } from "react-router-dom";
import { receitas } from "../data/receitas";
import * as S from "./ReceitaPage.styles";



export function ReceitaPage() {
  const { id } = useParams<{ id: string }>();

  const receita = receitas.find((r) => r.id === Number(id));

  if (!receita) {
    return <p>Receita não encontrada</p>;
  }

  return (
    <S.Container>
      <S.Title>{receita.nome}</S.Title>
      <S.Category>{receita.categoria}</S.Category>

      {/* INGREDIENTES */}
      {receita.ingredientes && (
        <>
          <S.SectionTitle>Ingredientes:</S.SectionTitle>

          {Object.entries(receita.ingredientes).map(
            ([grupo, itens]) => (
              <S.Group key={grupo}>
                <S.GroupTitle>{grupo}</S.GroupTitle>
                <S.List>
                  {(itens as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </S.List>
              </S.Group>
            )
          )}
        </>
      )}

      {/* MODO DE PREPARO */}
      {receita.modo_preparo && (
        <>
          <S.SectionTitle>Modo de preparo:</S.SectionTitle>

          {Object.entries(receita.modo_preparo).map(
            ([etapa, passos]) => (
              <S.Group key={etapa}>
                <S.GroupTitle>{etapa}</S.GroupTitle>
                <S.OrderedList>
                  {(passos as string[]).map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </S.OrderedList>
              </S.Group>
            )
          )}
        </>
      )}
    </S.Container>
  );
}
