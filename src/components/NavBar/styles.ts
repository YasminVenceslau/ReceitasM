import styled from "styled-components";


export const MenuWrapper = styled.div`

    /* Fundo do menu */
    .bm-menu {
        background:${({ theme }) => theme.colors.background};
        padding: 2rem 1.5rem;
        font-size: 1.1rem;
        
    }

    /* Itens do menu */
    .bm-item {
        display: block;
        color: ${({ theme }) => theme.colors.textPrimary};
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;
    }

    .bm-item:hover {
        color: ${({ theme }) => theme.colors.textSecondary};
    }

    /* Botão hamburguer */
    .bm-burger-button {
        position: fixed;
        width: 30px;
        height: 22px;
        right: 20px;
        top: 4%;
    }

    .bm-burger-bars {
        background:${({ theme }) => theme.colors.textPrimary};
    }

    /* Botão fechar (X) */
    .bm-cross {
        background:${({ theme }) => theme.colors.textPrimary};
    }

    /* Overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }
    display: none;

    
    h1{
        font-size: 36px;
        span{
            color: ${({theme}) => theme.colors.primary};
        }
    }
    @media (max-width: 768px) {
        display: block;
    }
`;
