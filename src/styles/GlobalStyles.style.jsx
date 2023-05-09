import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lexend', sans-serif;
    }

    ul {
        list-style-type: none;
    }

    button {
        border: none;

        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    p {
        font-size: 16px;
        line-height: 1;
    }

    input {
        border: none;

        &:focus {
            outline: 1px #ddd solid;
        }
    }
`;
