// src/pages/ReceitasList/styles.js
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;

  
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background || "#fff"};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.textLight || "#333"};

  white-space: nowrap;       /* não quebra a linha */
  overflow: hidden;          /* corta o texto que ultrapassa */
  text-overflow: ellipsis;   /* adiciona "..." no final se cortar */
`;

export const Category = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary || "#666"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
