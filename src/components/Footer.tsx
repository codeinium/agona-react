import React, {ReactElement} from "react";
import {AddressFooter, FooterStyled} from "./styled/FooterStyled.tsx";

function Footer(): ReactElement {
  return (
    <FooterStyled>
      <AddressFooter>
        <a href="">privacy</a>
        <p>ujjo llc, columbus oh, 43219</p>
        <a href="">instagram</a>
      </AddressFooter>
    </FooterStyled>
  )
}

export { Footer };