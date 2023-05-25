import styled from "styled-components";

export const StyledBookCard = styled.div`
  display: flex;
  background-color: #fdeddc;
  gap: 1rem;

  height: 11.5rem;

  border-radius: 8px;
  overflow: hidden;
  transition: background-color 0.2s;

  box-shadow: 0 0 4px 0 #0002;

  &:hover {
    background-color: #ffe4ca;
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

    display: flex;
    flex-direction: column;

    & > h4 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
      margin-bottom: 0.5rem;
    }

    & > p {
      font-size: 14px;
    }

    & > h3 {
      margin-bottom: 0.5rem;
    }
  }
`;
