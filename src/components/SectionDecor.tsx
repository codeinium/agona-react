import React, {ReactElement} from "react";

import {
  DecorSection,
  ContainerForBottomRunningLine,
  ContainerForItemsOfRunningLine,
  BottomForeignText,
} from "./styled/SectionDStyled.tsx";

import chilly from "../assets/chilly.svg";
import textWithFire from "../assets/text-with-fire.svg";
import {Marquee, MarqueeContent, MarqueeWrapper, SloganItem} from "./styled/marquee/MarqueeAnimated.tsx";

function SectionDecor () : ReactElement {

  const runningLineItems: string[] = [
    'download our media kit',
    'CONTACT FOR PARTNERSHIP OPPORTUNITIES',
    'download our media kit',
    'CONTACT FOR PARTNERSHIP OPPORTUNITIES',
    'download our media kit',
    'CONTACT FOR PARTNERSHIP OPPORTUNITIES',
    'download our media kit',
    'CONTACT FOR PARTNERSHIP OPPORTUNITIES',
    'download our media kit',
    'CONTACT FOR PARTNERSHIP OPPORTUNITIES',
  ];

  return (
    <DecorSection>
      <Marquee>
        <MarqueeWrapper>
          <MarqueeContent>
            {runningLineItems.map((text, index) => (
              <SloganItem key={index}>
                <img src={chilly} alt="chilly" />
                <p>{ text} </p>
              </SloganItem>
            ))}
          </MarqueeContent>
        </MarqueeWrapper>
      </Marquee>

      {/* Изображение с текстом */}
      <picture>
        <source srcSet={textWithFire} type="image/svg+xml" />
        <BottomForeignText src={textWithFire} alt="foreign text on green background" />
      </picture>
    </DecorSection>
  )
}

export { SectionDecor }