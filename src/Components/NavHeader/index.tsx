import React from "react";

import { Container } from "./styles";

const NavHeader: React.FC = () => {
  return (
    <Container>
      <a href="/">PÂGINA INICIAL</a>
      <a>CAMISETAS</a>
      <a>CALÇAS</a>
      <a href="/sapatos">SAPATOS</a>
      <a>CONTATO</a>
    </Container>
  );
};

export default NavHeader;
