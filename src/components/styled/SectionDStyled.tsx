import styled from "styled-components";

// Основной контейнер секции
export const DecorSection = styled.section`
  display: grid;
  width: 97.6vw;
  margin-left: 0.9vw;
  position: relative;
`;

// Контейнер для бегущей строки
export const ContainerForBottomRunningLine = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-top: var(--border);
  border-bottom: var(--border);
  border-right: var(--border);
  overflow: hidden;

  border: var(--border);
`;

// Контейнер для элементов бегущей строки
export const ContainerForItemsOfRunningLine = styled.div`
  animation: run 4s infinite linear;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;

  @keyframes run {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  p {
    font-size: 1.7em;
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
  }
`;

// Изображение с текстом внизу
export const BottomForeignText = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 2;
  top: -7.5vw;
`;