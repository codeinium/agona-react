import React from "react";
import { ReactElement } from "react";
import logo from "../assets/logo.svg";
import {
  HeaderContainer,
  DesktopHeader,
  MobileHeader,
  BurgerButton,
  MobileNav,
  LogoImage,
  Button,
} from "./styled/HeaderStyled.tsx";

function Header(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  return (
    <HeaderContainer>
      {/* Десктопный заголовок */}
      <DesktopHeader>
        <nav>
          <ul>
            <li>
              <Button as="a" href="#">
                Go Back
              </Button>
            </li>
            <li>
              <a href="#">Story</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <LogoImage src={logo} alt="Ujjo Logo" />
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Wholesale</a>
            </li>
            <li>
              <Button as="a" href="#">
                Clone
              </Button>
            </li>
          </ul>
        </nav>
      </DesktopHeader>

      {/* Мобильный заголовок */}
      <MobileHeader>
        <BurgerButton
          $isActive={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* Логотип */}
        <LogoImage src={logo} alt="Ujjo Logo" />

        {/* Мобильное меню */}
        <MobileNav $isOpen={isMenuOpen}>
          <ul>
            <li>
              <a href="#">Story</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Wholesale</a>
            </li>
          </ul>
        </MobileNav>
      </MobileHeader>
    </HeaderContainer>
  );
}

export { Header };