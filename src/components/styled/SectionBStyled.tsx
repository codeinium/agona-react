import styled, { keyframes } from "styled-components";

// Основной контейнер секции
export const SectionBannerContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--white-color);
  border: var(--border);
  margin-left: 0.90vw;
  width: 98.3%;
  box-sizing: border-box;
  margin-top: 2.8%;
`;

// Логотипная секция
export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрирование содержимого */
  width: 50%; /* Занимает половину ширины секции */
  box-sizing: border-box;
`;

// Группа логотипов
export const LogoGroup = styled.div`
  position: relative; /* Создаем контекст позиционирования */
  width: 100%; /* Занимает всю доступную ширину */
  border: var(--border);
  border-left: 0;
  border-top: 0;
  box-sizing: border-box;
  height: 30vw;
`;

// Логотипы
export const Logo = styled.picture<{ $isLogo1?: boolean }>`
  position: absolute; /* Абсолютное позиционирование */
  top: ${({ $isLogo1 }) => ($isLogo1 ? "20%" : "0")}; /* Смещение верхнего логотипа */
  left: 0;
  width: 100%; 
  height: auto;
  object-fit: contain;
  z-index: ${({ $isLogo1 }) => ($isLogo1 ? 2 : 1)}; /* Управление слоями */

  img {
    vertical-align: middle;
    width: 100%; /* Изображение занимает всю ширину родителя */
    height: auto; /* Автоматическая высота */
    max-width: 100%;
  }
`;

// Изображение соуса на столе
export const SauceOnTable = styled.img`
  width: 100%;
  padding: 1.1vw;
  box-sizing: border-box;
  border-right: var(--border);
`;

// Секция с горячим соусом
export const HotSauceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50%;
  box-sizing: border-box;

  h1 {
    padding: 6vw 0;
    border-bottom: var(--border);
    font-size: 4vw;
    text-align: center;
  }

  picture img {
    width: 100%;
    padding: 1.1vw;
    box-sizing: border-box;
  }
`;