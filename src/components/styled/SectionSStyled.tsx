import styled from "styled-components";

export const StorySection = styled.section`
  display: grid;
  max-width: 98.8%;
  margin-left: 0.9vw;
  grid-template-columns: 50% 50%;
`;

export const SauceInCup = styled.picture`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  max-width: 98.3%;
  margin-left: 0.9vw;
  width: 100%;
  border-left: var(--border);
  border-right: var(--border);
  border-top: var(--border);
  img {
    padding: 1.1vw;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const ContainerForStory = styled.div`
  border-top: var(--border);
  border-left: var(--border);

  h2 {
    padding-top: 2vw;
    padding-bottom: 2vw;
    text-align: center;
    font-size: 3.5em;
  }

  img {
    width: 48.5vw;
  }
`;

export const ContainerForStoryCard = styled.div`
  position: relative;
  width: 49vw;
  height: 49vw;
  border-left: var(--border);

  p {
    padding-bottom: 2vw;
  }

  h3 {
    position: absolute;
    z-index: 2;
    font-size: 1rem;
    text-align: center;
    word-break: break-word;
    top: 10vw;
    left: 10vw;
    width: 28.6vw;
  }

  img {
    border-right: var(--border);
    width: 48.5vw;
  }
`;

