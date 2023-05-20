import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //position: fixed;

  width: 100%;
  padding: 1rem 2.5rem;
  margin-bottom: 1rem;
  background-color: #f8f8f8;

  & > div {
    display: inherit;
    gap: 3rem;
    align-items: inherit;
  }

  & > div > div {
    display: inherit;
    gap: 3rem;
  }
`;
