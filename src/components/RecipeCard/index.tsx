import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as S from "./styles";
import { RecipePreview } from "../ReceitaPrevia";



// Exemplo: src/components/RecipeCard/index.tsx
// Se você está exportando a interface Receita daqui:

export interface Receita {
  id: number;
  nome: string;
  categoria: string;
  tags: string[];

  forma?: string;
  Panela?: string;
  rendimento?: string;

  // CORREÇÃO ESSENCIAL 1: tempo_preparo deve aceitar string ou undefined para as chaves
  tempo_preparo?: {
    [etapa: string]: string | undefined; 
  };

  // CORREÇÃO ESSENCIAL 2: ingredientes deve ter apenas string[] como valor
  ingredientes?: {
    [titulo: string]: string[];
  };

  // CORREÇÃO ESSENCIAL 3: modo_preparo deve ter apenas string[] como valor
  modo_preparo?: {
    [titulo: string]: string[];
  };

   Finalização?: string[];
}


type RecipeCardProps = {
  receita: Receita;
};

export function RecipeCard({ receita }: RecipeCardProps) {
  const navigate = useNavigate();
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <S.Card>
        <S.Header>
          <S.Title>{receita.nome}</S.Title>
          <S.Category>{receita.categoria}</S.Category>
        </S.Header>

        <S.Info>
          {receita.tempo_preparo?.total && (
            <p>
              <strong>⏱ Tempo:</strong> {receita.tempo_preparo.total}
            </p>
          )}

          {receita.rendimento && (
            <p>
              <strong>🍽 Rendimento:</strong> {receita.rendimento}
            </p>
          )}
        </S.Info>

        <S.Tags>
          {receita.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </S.Tags>

        <S.Actions>
          <S.Button onClick={() => navigate(`/receita/${receita.id}`)}>
            Ver receita
          </S.Button>

          <S.PreviewButton onClick={() => setPreviewOpen(true)}>
            👁 Prévia
          </S.PreviewButton>
        </S.Actions>
      </S.Card>

      {previewOpen && (
        <RecipePreview
          receita={receita}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </>
  );
}