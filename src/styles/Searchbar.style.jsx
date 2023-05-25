import styled from "styled-components";

export const StyledSearchbar = styled.div`
  display: flex;
  width: fit-content;
  box-shadow: 0 0 4px 0 #0002;
  border-radius: 10px;
  margin-bottom: 1rem;

  & > input {
    padding: 0.5rem 1rem;
    width: 300px;
    background-color: #fdeddc;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: 10;
  }

  & > button {
    padding: 0.5rem 0.8rem;
    background-color: #ffe4ca;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
