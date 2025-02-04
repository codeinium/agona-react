import styled, { css } from "styled-components";

// Основной контейнер для Header
export const HeaderContainer = styled.header`
  width: calc(100% - 44px);
  height: auto;
  position: fixed;
  top: 0;
  left: 22px;
  right: 22px;
  background-color: var(--white-color);
  border: var(--border);
  z-index: 100;
  text-transform: uppercase;
`;

// Десктопный заголовок
export const DesktopHeader = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;

    nav ul {
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      margin: 0;

      li {
        margin: 0 15px;

        a {
          text-decoration: none;
          color: var(--black-color);
          font-size: 1em;
          border: none;
          background: none;
          cursor: pointer;
        }
      }
    }
  }
`;

// Мобильный заголовок
export const MobileHeader = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

// Кнопка
export const Button = styled.button`
  text-transform: uppercase;
  background-color: var(--button-header);
  color: var(--white-color);
  text-decoration: none;
  font-size: 14px;
  border: none;
  padding: 20px 55px;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
`;

// Корневые переменные
export const GlobalStyles = css`
  :root {
    font-family: "Roboto", sans-serif;
    --button-header: #fb4b4d;
    --border: 1px solid black;
    --main-color: #cefd3b;
    --white-color: white;
    --black-color: black;
    max-width: 1920px;
    min-width: 600px;
  }
`;

// Логотип
export const LogoImage = styled.img`
  height: 30px;
  width: auto;
  margin: 0 auto;
  display: block;
`;

// Кнопка бургера
export const BurgerButton = styled.button<{ $isActive: boolean }>`
  width: 30px;
  height: 20px;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--black-color);
    transition: all 0.3s;
  }

  &::before {
    top: ${({ $isActive }) => ($isActive ? "9px" : "0")};
    transform: ${({ $isActive }) => ($isActive ? "rotate(45deg)" : "none")};
  }

  &::after {
    bottom: ${({ $isActive }) => ($isActive ? "9px" : "0")};
    transform: ${({ $isActive }) => ($isActive ? "rotate(-45deg)" : "none")};
  }
`;

// Мобильное меню
export const MobileNav = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: var(--white-color);
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 1rem 0;
      text-align: center;

      a {
        text-decoration: none;
        color: var(--black-color);
        font-size: 1.1rem;
        text-transform: uppercase;
      }
    }
  }
`;