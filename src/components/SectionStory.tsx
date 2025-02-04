import React, {ReactElement} from "react";
import founder from "../assets/founder.png";
import backgroundStory from "../assets/background-story.svg";
import saucePouring from "../assets/sauce-pouring.png"

import {
  StorySection,
  ContainerForStory,
  ContainerForStoryCard,
  SauceInCup,
} from "./styled/SectionSStyled.tsx"

function SectionStory (): ReactElement {
  return(
    <>
      <SauceInCup>
        <source srcSet={saucePouring} type="image/png" />
        <img src={saucePouring} alt="Hot Sauce Pouring into Coffee" />
      </SauceInCup>
      <StorySection>
        <ContainerForStory>
          <h2>
            the story behind
            <br />
            the sauce
          </h2>
          <picture>
            <source srcSet={founder} />
            <img src={founder} alt="Founder" />
          </picture>
        </ContainerForStory>
        <ContainerForStoryCard>
          <img src={backgroundStory} alt="background-story-section" />
          <h3>
            <p>"HELLO, I’M LAUREN AND AS A LIFELONG ADVENTUROUS EATER, I’VE TRIED A LOT OF CRAZY THINGS,
              BUT I NEVER THOUGHT HOT SAUCE IN COFFEE WAS A SANE OPTION UNTIL A FRIEND DARED ME TO TRY IT."</p>
            <p>"AND IT SUCKED."</p>
            <p>"BUT I WONDERED IF THERE WAS A WAY TO ADD SPICE TO MY COFFEE.
              WHEN THERE WAS NO EASY SOLUTION, UJJO WAS BORN."</p>
            <p>"UJJO (OOO-JOE): THE WORD FOR “FIRE” IN KONKANI, SPOKEN ON THE WEST COAST OF INDIA,
              IS AN HOMAGE AND A LOVE LETTER TO MY DAD, AN INDIAN IMMIGRANT WHO INSTILLED A FIRE IN MY PALATE
              – AND MY HEART – FROM THE VERY BEGINNING."</p>
          </h3>
        </ContainerForStoryCard>
      </StorySection>
    </>
  );
}

export { SectionStory }