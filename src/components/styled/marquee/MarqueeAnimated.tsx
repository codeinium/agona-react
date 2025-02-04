import styled, { keyframes } from "styled-components";

// Анимация для бегущей строки
const marqueeScroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

// Бегущая строка (Marquee)
export const Marquee = styled.div`
  overflow-x: hidden;
  border: var(--border);
  padding: 2.639vw 0;
  box-sizing: border-box;
  white-space: nowrap;
  position: relative;
  width: 100%; 
`;

// Контейнер для ограничения ширины бегущей строки
export const MarqueeWrapper = styled.div`
  margin: 0 auto; /* Центрирование */
  overflow: hidden; /* Скрываем выходящие за пределы элементы */
`;

// Содержимое бегущей строки
export const MarqueeContent = styled.div`
  display: flex;
  animation: ${marqueeScroll} 20s linear infinite;
  p {
    font-size: 1.7em;
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
  }
`;

export const SloganItem = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 10vh;

  img {
    width: 20%;
    margin-right: 10px;
  }

  span {
    white-space: nowrap;
    font-size: 3em;
    text-transform: uppercase;
  }
`;