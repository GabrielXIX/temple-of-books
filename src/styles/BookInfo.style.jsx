import styled from "styled-components";

export const StyledBookHeader = styled.div`
  margin: 2rem 4rem 1rem 4rem;
  display: grid;
  grid-template-columns: 12rem 1fr;
  grid-gap: 1rem;

  & > div > img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0 4px 0 #0002;
  }

  & > div:nth-child(2) {
    background-color: #fdeddc;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 0 4px 0 #0002;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    & > p {
      line-height: 1.4;
    }

    & > h3 {
      margin-bottom: 1rem;
    }
    & > h1 {
      margin-bottom: 0.5rem;
    }

    & > div {
      margin-top: auto;
      align-self: flex-end;

      & > button {
        padding: 0.5rem 2rem;
        margin-left: 1rem;
        border-radius: 8px;
        background-color: #ffd5a9;
      }
    }
  }
`;

export const StyledBookDetails = styled.div`
  padding: 2rem;
  margin: 2rem 4rem 1rem 4rem;

  border-radius: 8px;
  background-color: #fdeddc;
  box-shadow: 0 0 4px 0 #0002;
  max-width: 50rem;

  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    & > p {
      line-height: 1.5;
    }
  }

  & > h2 {
    margin-bottom: 1.5rem;
  }
`;
