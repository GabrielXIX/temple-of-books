import styled from "styled-components";

export const StyledReviewModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 10;
  background-color: #0005;

  & > form {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    background-color: #fff4e8;

    border-radius: 8px;
    padding: 2rem;

    width: 30rem;
    //height: 20rem;

    & > textarea {
      width: 100%;
      resize: none;
      line-height: 1.6;
      overflow-y: hidden;
      border: none;
      border-radius: 8px;
      padding: 1rem;

      &:focus {
        outline: 2px solid #ffd5a9;
      }
    }

    & > h3 {
      margin-bottom: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > div {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      justify-content: flex-end;

      & > button {
        border-radius: 8px;
        padding-inline: 2rem;
      }

      & > button:first-of-type {
        background-color: #ff9b9b;
      }

      & > button:nth-of-type(2) {
        background-color: #ffd5a9;
      }
    }
  }
`;
