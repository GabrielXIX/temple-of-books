import styled from "styled-components";

export const StyledSignupForm = styled.div`
  background-color: #ffe4ca;
  border-radius: 10px;
  box-shadow: 0 0 4px 0 #0002;

  & > div {
    display: flex;
    align-items: center;

    & > img {
      object-fit: cover;
      width: 24rem;
      border-radius: 10px;
      margin: 0 auto;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    padding: 1rem 3rem;

    & > h3 {
      margin-bottom: 1rem;
      color: #91796b;
      text-align: center;
    }

    & > button {
      width: 100%;
    }

    & div {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;

      & > input {
        padding: 0.8rem;
        border-radius: 10px;
        background-color: #ffedda;
      }
    }
  }
`;
