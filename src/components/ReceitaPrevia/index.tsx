import { useNavigate } from "react-router-dom";
import * as S from "./styles";

type Receita = {
  id: number;
  nome: string;
  categoria: string;
  tempo_preparo?: {
    total?: string;
  };
  ingredientes?: Record<string, string[]>;
};

type RecipePreviewProps = {
  receita: Receita | null;
  onClose: () => void;
};

export function RecipePreview({ receita, onClose }: RecipePreviewProps) {
  const navigate = useNavigate();

  if (!receita) return null;

  const ingredientesArray =
    receita.ingredientes &&
    Object.values(receita.ingredientes)[0];

  return (
    <S.Overlay>
      <S.Modal>
        <S.Close onClick={onClose}>✕</S.Close>

        <S.Title>{receita.nome}</S.Title>

        <S.Category>
          <strong>Categoria:</strong> {receita.categoria}
        </S.Category>

        <S.Category>
          <strong>Tempo:</strong> {receita.tempo_preparo?.total}
        </S.Category>

        <S.SectionTitle>Ingredientes</S.SectionTitle>

        {Array.isArray(ingredientesArray) && (
          <S.List>
            {ingredientesArray.slice(0, 5).map((item, i) => (
              <li key={i}>{item}</li>
            ))}

            {ingredientesArray.length > 5 && (
              <S.Button
                type="button"
                onClick={() => navigate(`/receita/${receita.id}`)}
              >
                Ver mais
              </S.Button>
            )}
          </S.List>
        )}
      </S.Modal>
    </S.Overlay>
  );
}
