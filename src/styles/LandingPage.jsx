import styled from "styled-components";
import landingBg from "../assets/landingBg.jpg";
//https://www.pxfuel.com/en/desktop-wallpaper-oxjae/download/1920x1080

export const StyledLandingPage = styled.div`
  width: 100vw;
  height: calc(100vh - 74.6px);
  padding: 2rem;

  position: relative;

  background-image: url(${landingBg});

  & > div {
    width: 60vw;
    height: 60vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    backdrop-filter: blur(3px);
    background-color: #0008;
    border-radius: 8px;

    padding: 2rem;

    & > h1 {
      color: #ddd0c2;
      font-size: 4rem;
      text-align: center;
    }

    & > h2 {
      color: #ddd0c2;
      font-size: 2rem;
    }

    & > .link {
      padding: 1rem 3rem;
      border-radius: 8px;
      background-color: #ffd5a9;
    }
  }
`;
