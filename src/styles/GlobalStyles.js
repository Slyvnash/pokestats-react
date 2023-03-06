import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0 1.5em;
        background-color: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.colors.white};
        font-family: "Nunito", sans-serif;
        font-size: 1em;

        @media only screen and (min-width: 1280px) {
            padding: 0 3em;
        }
    }
`