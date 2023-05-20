import styled from "styled-components";

export const StyledSearchbar = styled.div`
  display: flex;
  margin: 0 2rem;

  & > input {
    padding: 0.5rem 1rem;
    width: 300px;
    background-color: #f8f8f8;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  & > button {
    padding: 0.5rem 0.8rem;
    background-color: #9bff96;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
