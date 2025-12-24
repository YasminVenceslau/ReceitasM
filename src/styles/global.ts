import  { createGlobalStyle } from 'styled-components'


export const GlobalCSs = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        filter: none;
        
    }

    body{
        background:${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.textPrimary};
        font-family: 'Poppins', sans-serif;
    }

`