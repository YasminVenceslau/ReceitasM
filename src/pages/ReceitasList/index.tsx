import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles"; // novo arquivo de estilos
import { receitas } from "../../data/receitas";

export function ReceitaList() {
  const { tag } = useParams();
  const navigate = useNavigate();

  const filtradas = tag
    ? receitas.filter(r =>
        r.tags.some(t => t.replace("#", "").toLowerCase() === tag.toLowerCase())
      )
    : receitas;

  if (!filtradas.length) {
    return <S.Container><p>Nenhuma receita encontrada para o "{tag}".</p></S.Container>;
  }

  return (
    <S.Container>
      {filtradas.map(r => (
        <S.Card key={r.id} onClick={() => navigate(`/receita/${r.id}`)}>
          <S.Title>{r.nome}</S.Title>
          <S.Category>{r.categoria}</S.Category>
        </S.Card>
      ))}
    </S.Container>
  );
}
