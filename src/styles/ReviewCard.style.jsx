import styled from "styled-components";

export const StyledReviewCard = styled.div`
  background-color: #fdeddc;
  //height: 11.5rem;
  padding: 1rem;
  position: relative;

  border-radius: 8px;
  overflow: hidden;

  box-shadow: 0 0 5px #e3e3e3;

  & > div {
    margin-bottom: 1rem;
    overflow: hidden;
    height: 6rem;

    & > p {
      overflow: hidden;
    }
  }

  & > p:first-of-type {
    margin-left: auto;
  }
`;
