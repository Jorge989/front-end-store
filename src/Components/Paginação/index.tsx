import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";

const Paginação: React.FC = () => {
  return (
    <Container>
      <FiArrowLeft />
      <p className="pagina1">1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <FiArrowRight />
    </Container>
  );
};

export default Paginação;
