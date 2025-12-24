import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 8px;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
`;

export const Close = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 12px;
`;

export const Category = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 8px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.accent};
  margin: 20px 0 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 4px;
`;

export const Group = styled.div`
  margin-bottom: 12px;
`;

export const GroupTitle = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 6px;
  text-transform: capitalize;
`;

export const List = styled.ul`
  padding-left: 20px;
  li {
    margin-bottom: 4px;
    line-height: 1.4;
  }
`;

export const OrderedList = styled.ol`
  padding-left: 20px;
  li {
    margin-bottom: 6px;
    line-height: 1.5;
  }
`;
export const Button = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.accent};
    }
`;