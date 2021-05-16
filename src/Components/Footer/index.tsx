import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Contato: Magento@email.com</Link>
        </li>
        <li>
          <Link to="/">Telefone: (11) 555-77789</Link>
        </li>
        <li>
          <Link to="/">Instagram: @empresa</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Footer;
