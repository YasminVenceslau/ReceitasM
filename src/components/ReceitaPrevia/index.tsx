import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export function RecipePreview({ receita, onClose }) {
  const navigate = useNavigate();
  if (!receita) return null;

  return (
    <S.Overlay>
      <S.Modal>
        <S.Close onClick={onClose}>✕</S.Close>

        <S.Title>{receita.nome}</S.Title>
        <S.Category><strong>Categoria:</strong> {receita.categoria}</S.Category>
        <S.Category><strong>Tempo:</strong> {receita.tempo_preparo?.total}</S.Category>

        <S.SectionTitle>Ingredientes</S.SectionTitle>
        <S.List>
          {Object.values(receita.ingredientes)[0]
          .slice(0, 5)
          .map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          {Object.values(receita.ingredientes)[0].length > 5 && (
            <S.Button onClick={() => navigate(`/receita/${receita.id}`)}>
                        Ver mais
            </S.Button>
          )}
        </S.List>
      </S.Modal>
    </S.Overlay>
  );
}
