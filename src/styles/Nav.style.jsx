import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //position: fixed;

  width: 100%;
  padding: 1rem 2.5rem;
  background-color: #f8f8f8;

  & > div {
    display: inherit;
    align-items: inherit;
    gap: 1rem;

    & > div {
      & > input {
        padding: 0.5rem 1rem;
        width: 300px;

        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }

      & > button {
        padding: 0.5rem 0.8rem;
        background-color: #9bff96;

        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`;
