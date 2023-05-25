import styled from "styled-components";

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  justify-content: flex-start;

  & > h1 {
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 18px;
    padding: 0.5rem 1rem;
    background-color: #fdeddc;
    border-radius: 8px;
    width: fit-content;
  }

  & > button {
    width: fit-content;
    padding: 0.5rem 2rem;
    border-radius: 8px;
    background-color: #ffd5a9;
    margin-top: 1rem;
  }
`;
