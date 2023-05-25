import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lexend', sans-serif;
    }

    body {
        background-color: #fff4e8;
    }

    ul {
        list-style-type: none;
    }

    button {
        border: none;

        cursor: pointer;
        font-size: 1rem;
        padding: 0.5rem;
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
            outline: 2px #ffe4ca solid;
        }
    }

    main {
        padding: 2rem;
    }

    h1, h2, h3, h4 {
        line-height: 1;
    }

    h4 {
        margin-bottom: 1rem;
    }
    
    .link {
        color: #000;
        padding: 0.5rem;
    }

    .mainBtn {
        padding: 0.5rem 1rem;
        background-color: #FDD7AA;
        width: fit-content;
        border-radius: 10px;
        color: #382f2a;
    }
`;
