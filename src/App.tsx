import {ReactElement } from 'react'
import React from "react";

import "./css/global.css"
import "./css/adaptive.css"
import "./css/variables.css"
import "./assets/fonts/font.css"

import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { SectionBanner } from "./components/SectionBanner.tsx";
import { SectionProducts } from "./components/SectionProducts.tsx";
import { SectionStory } from "./components/SectionStory.tsx";
import { SectionDecor } from "./components/SectionDecor.tsx";

function App() : ReactElement {

  return (
    <>
      <Header />
      <main className="sections-container">
        <SectionBanner />
        <SectionProducts/>
        <SectionStory />
        <SectionDecor />
      </main>
      <Footer />
    </>
  );
}

export default App
