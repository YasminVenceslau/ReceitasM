import { useEffect } from 'react'; // 👈 Importar useEffect
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
  onClose?: () => void;
  modo?: "modal" | "pagina";
};

export function RecipePreview({
  receita,
  onClose,
  modo = "modal",
}: RecipePreviewProps) {
  const navigate = useNavigate();

  // 🛑 LÓGICA CORRIGIDA: Usa useEffect para navegar APÓS a renderização
  useEffect(() => {
    // A navegação só deve ocorrer se o modo for 'pagina' e a receita existir
    if (modo === "pagina" && receita) {
        // Redireciona para a página de detalhes
        navigate(`/receita/${receita.id}`);
    }
    // As dependências garantem que a navegação ocorra apenas quando o componente
    // é montado e possui as props corretas.
  }, [modo, receita, navigate]);
  // ----------------------------------------------------

  if (!receita) return null;

  // Se o modo for "pagina", o useEffect cuida da navegação.
  // Retornamos null para não renderizar nada.
  if (modo === "pagina") {
    return null;
  }

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
                // A navegação no botão de 'Ver mais' está correta, pois é acionada por um clique.
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