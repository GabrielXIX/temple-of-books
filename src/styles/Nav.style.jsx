import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0.8rem 2rem;
  background-color: #fdeddc;

  box-shadow: 0 0 4px 0 #0002;

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
