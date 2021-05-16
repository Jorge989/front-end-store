import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";

interface Item {
  id: number;
  name: string;
  path: string;
}

const SideBar: React.FC = () => {
  const [camisas, setCamisas] = useState<Item[]>([]);

  useEffect(() => {
    api.get(`list`).then((response) => {
      const items = response.data.filtro[0].items;
      setCamisas(items);
    });
  }, []);

  useEffect(() => {
    console.log(camisas);
  }, [camisas]);
  return (
    <Container>
      <a>Pâgina Inicial</a>
      {camisas.map((item) => (
        <a key={item.id}>{item.name}</a>
      ))}
      <a href="#id-do-elemento">Contato</a>
    </Container>
  );
};

export default SideBar;
