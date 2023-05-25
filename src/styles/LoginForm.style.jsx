import styled from "styled-components";

export const StyledLoginForm = styled.div`
  width: 24rem;
  background-color: #ffe4ca;
  border-radius: 10px;
  box-shadow: 0 0 4px 0 #0002;

  & > img {
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    //align-items: center;
    //gap: 1rem;
    padding: 1rem 3rem;

    & p {
      margin-bottom: 0.5rem;
      color: #a28878;
    }

    & > h3 {
      margin-bottom: 1rem;
      color: #91796b;
      text-align: center;
    }

    & > input {
      padding: 0.8rem;
      border-radius: 10px;
      background-color: #ffedda;
      width: 18rem;
      margin-bottom: 1rem;
    }

    & > button {
      width: 100%;
    }
  }
`;
