import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Container } from "./styles";

const Navigation: React.FC = () => {
  return (
    <Container className="navigation">
      <span>Página Inicial</span>
      <FiArrowRight />
      <p>Sapatos</p>
    </Container>
  );
};

export default Navigation;
