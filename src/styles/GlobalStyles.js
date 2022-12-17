import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.colors.white};
        font-family: "Nunito", sans-serif;
        font-size: 1em;
    }
`