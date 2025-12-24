import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Card = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 24px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4px;
`;

export const Category = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.accent};
  margin: 32px 0 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 6px;
`;

export const Group = styled.div`
  margin-bottom: 20px;
`;

export const GroupTitle = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 8px;
  text-transform: capitalize;
`;

export const List = styled.ul`
  padding-left: 20px;

  li {
    margin-bottom: 6px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const OrderedList = styled.ol`
  padding-left: 20px;

  li {
    margin-bottom: 10px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
