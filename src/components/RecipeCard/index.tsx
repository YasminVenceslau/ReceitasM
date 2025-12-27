import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as S from "./styles";
import { RecipePreview } from "../ReceitaPrevia";



export interface Receita {
    id: number;
    nome: string;
    categoria: string;
    tags: string[];

    forma?: string;
    Panela?: string;
    rendimento?: string;

    // ESSENCIAL: Permite que qualquer etapa seja string, ou undefined (se ausente)
    tempo_preparo?: {
        [etapa: string]: string | undefined; 
    };

    // ESSENCIAL: Remove o ' | undefined' dos arrays internos para consistência
    ingredientes?: {
        [titulo: string]: string[];
    };

    modo_preparo?: {
        [titulo: string]: string[];
    };

    finalizacao?: string[];
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