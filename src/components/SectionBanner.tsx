import React, { ReactElement }from "react";

import logoWord1 from '../assets/logo-word1.svg';
import logoWord2 from '../assets/logo-word2.svg';
import chilly from '../assets/chilly.svg';
import sauceOnTable from '../assets/sause-on-table.png';
import sauceInHand from '../assets/sauce-in-hand.png';

import {
  SectionBannerContainer,
  LogoSection,
  HotSauceSection,
  LogoGroup,
  SauceOnTable,
  Logo,
} from './styled/SectionBStyled.tsx';

import {Marquee, MarqueeContent, MarqueeWrapper, SloganItem} from "./styled/marquee/MarqueeAnimated.tsx";

function SectionBanner(): ReactElement {
  return (
    <SectionBannerContainer>
      <LogoSection>
        <LogoGroup>
          <Logo $isLogo1={false}>
            <source srcSet={logoWord2} type="image/svg+xml"/>
            <img src={logoWord2} alt="Ujjo"/>
          </Logo>
          <Logo $isLogo1={true}>
            <source srcSet={logoWord1} type="image/svg+xml"/>
            <img src={logoWord1} alt="3uutt"/>
          </Logo>
        </LogoGroup>

        <Marquee>
          <MarqueeWrapper>
            <MarqueeContent>
              {[...Array(5)].map((_, index) => (
                <SloganItem key={index}>
                  <img src={chilly} alt="chilly" />
                  <span>put some fire in your belly</span>
                </SloganItem>
              ))}
            </MarqueeContent>
          </MarqueeWrapper>
        </Marquee>

        <SauceOnTable src={sauceOnTable} alt="sauce on table"/>
      </LogoSection>

      <HotSauceSection>
        <h1>The First Hot Sauce Made for Coffee</h1>
        <picture>
          <source srcSet={sauceInHand} type="image/png"/>
          <img src={sauceInHand} alt="Hot Sauce in Hand"/>
        </picture>
      </HotSauceSection>
    </SectionBannerContainer>
  );
}

export { SectionBanner };

