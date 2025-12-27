import styled from "styled-components";

export const Card = styled.div`
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
`;

export const Header = styled.div`
    argin-bottom: 8px;
`;

export const Title = styled.h2`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Category = styled.span`
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Info = styled.div`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 8px 0;

    p {
        margin: 4px 0;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 12px;

    span {
        background: ${({ theme }) => theme.colors.w};
        border: 1px solid ${({ theme }) => theme.colors.border};
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.accent};
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
export const Actions = styled.div`
    display: grid;
    gap: 8px;
`;

export const PreviewButton = styled.button`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textPrimary};
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
`;

