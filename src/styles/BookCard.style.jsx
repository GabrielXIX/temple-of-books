import styled from "styled-components";

export const StyledBookCard = styled.div`
  display: flex;
  background-color: #f8f8f8;
  gap: 1rem;

  ${(props) =>
    props.is_large === "true"
      ? "height: 11.5rem;"
      : "height: 3rem; white-space: nowrap;"};

  border-radius: 8px;
  overflow: hidden;
  transition: background-color 0.2s;

  box-shadow: 0 0 5px #e3e3e3;
  &:hover {
    background-color: #f0f0f0;
  }

  & > div:first-child {
    width: 8rem;

    img {
      object-fit: cover;
      width: 8rem;
      height: 100%;
      border-bottom-left-radius: 8px;
      border-top-left-radius: 8px;
    }
  }

  & > div:nth-child(2) {
    padding: 1rem 1rem 1rem 0;

    & > h4 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      line-clamp: 3;
      -webkit-box-orient: vertical;
      margin-bottom: 0.5rem;
    }

    & > p {
      font-size: 12px;
    }
  }
`;
