import styled from "styled-components";

export const Container = styled.main`
  padding: 24px;
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  span {
    color: #d35400; /* Cor de destaque para o termo de busca */
  }
`;

export const List = styled.section`
  /* Grid responsivo para exibir múltiplos cards */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`;

export const Empty = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

// 🛑 NOVOS ESTILOS PARA O CARD DE RESULTADO

export const Card = styled.div`
  /* Estilo que você forneceu para o card clicável */
  background-color: ${({ theme }) => theme.colors.surface || "#fff"};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  display: flex; 
  flex-direction: column;
  height: auto; /* Altura ajustável ao conteúdo */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
`;

export const TitleCard = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textLight};
  /* Garante que o título não estoure o card */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Estilos adicionais para melhorar a visualização no card:
export const CategoryCard = styled.span`
  font-size: 0.9rem;
  color: #d35400; /* Cor secundária */
`;

export const TimeCard = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: #2c3e50;
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;