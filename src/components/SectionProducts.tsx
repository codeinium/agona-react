import React, {ReactElement} from "react";

import {
  SectionProd,
  LavaJava,
  ContainerForProductsCardsAndFires,
  ContainerForFires,
  ContainerForCards,
  ProductsCard,
  ContainerForProductInfo,
  ProductName,
  ProductDescription,
} from "./styled/SectionPStyled.tsx";

import {Marquee, MarqueeContent, MarqueeWrapper, SloganItem} from "./styled/marquee/MarqueeAnimated.tsx";

import scorpionLeft from "../assets/scorpion-left.svg";
import scorpionRight from "../assets/scorpion-right.svg";
import fireSmall from "../assets/fire-small.svg";
import fireBig from "../assets/fire-big.svg";
import backgroundGreen from "../assets/background-green.svg";
import lightRoast from "../assets/light-roast.png";
import ujjoSamplerPack from "../assets/ujjo-sampler-pack.png";
import darkRoast from "../assets/dark-roast.png";
import chilly from "../assets/chilly.svg";


function SectionProducts (): ReactElement {
  return (
    <SectionProd>
      <LavaJava>
        <img src={scorpionLeft} alt="Scorpion left" />
        <h2>Throw Some Lava in Your Java</h2>
        <img src={scorpionRight} alt="Scorpion right" />
      </LavaJava>

      <ContainerForProductsCardsAndFires>
        <ContainerForFires>
          {[fireSmall, fireBig, fireBig, fireSmall].map((src, i) => (
            <img key={i} src={src} alt={`fire-${i}`} />
          ))}
        </ContainerForFires>

        <ContainerForCards>
          <ProductsCard>
            <img src={backgroundGreen} alt="Background green" />
            <ContainerForProductInfo>
              <ProductDescription>tangy and tingly</ProductDescription>
              <ProductName>LIGHT ROAST BLEND</ProductName>
              <img src={lightRoast} alt="Light roast" />
            </ContainerForProductInfo>
          </ProductsCard>

          <ProductsCard>
            <img src={backgroundGreen} alt="Background green" />
            <ContainerForProductInfo>
              <ProductDescription>light & dark roast</ProductDescription>
              <ProductName>UJJO SAMPLER PACK</ProductName>
              <img src={ujjoSamplerPack} alt="Sampler pack" />
            </ContainerForProductInfo>
          </ProductsCard>

          <ProductsCard>
            <img src={backgroundGreen} alt="Background green" />
            <ContainerForProductInfo>
              <ProductDescription>tangy and tingly</ProductDescription>
              <ProductName>DARK ROAST BLEND</ProductName>
              <img src={darkRoast} alt="Dark roast" />
            </ContainerForProductInfo>
          </ProductsCard>
        </ContainerForCards>
      </ContainerForProductsCardsAndFires>

      <Marquee>
        <MarqueeWrapper>
          <MarqueeContent>
            {[...Array(5)].map((_, index) => (
              <SloganItem key={index}>
                <img src={chilly} alt="chilly" />
                <span> put some fire in your belly </span>
              </SloganItem>
            ))}
          </MarqueeContent>
        </MarqueeWrapper>
      </Marquee>
    </SectionProd>
  );
}

export { SectionProducts }