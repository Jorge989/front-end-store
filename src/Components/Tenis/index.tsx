import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import Tenis1 from "../../assets/shoes1.jpg";
import Tenis2 from "../../assets/ss.png";
import Tenis3 from "../../assets/shoes-3.jpg";
import Tenis4 from "../../assets/shoes-4.jpg";
import Tenis5 from "../../assets/shoes-5.jpg";
import Tenis6 from "../../assets/shoes-6.jpg";
import Tenis7 from "../../assets/shoes-7.jpg";
import Tenis8 from "../../assets/shoes-8.jpg";
import Tenis9 from "../../assets/shoes-9.jpg";
interface Item {
  id: number;
  sku: string;
  path: string;
  price: string;
  items: string;
}

const Tenis: React.FC = () => {
  const [tenis, setTenis] = useState<any>([]);
  const [newTenis, setNewTenis] = useState([]);

  useEffect(() => {
    api.get(`tenis`).then((response) => {
      console.log(response.data);
      const tenis = response.data.tenis;
      setTenis(tenis);
      console.log(tenis);
    });
  }, []);

  // useEffect(() => {
  //   console.log(tenis[0]);
  // }, [tenis]);
  const myTenis = tenis[0]?.items?.map((item) => (
    <div key={item.id}>
      {/* {item.sku}
      {item.path}
    {item.items} */}
      {item.price}
    </div>
  ));
  return (
    <Container>
      <div className="tenis-container1">
        <div className="tenis">
          {" "}
          <img src={Tenis1} alt="tenis1"></img>
          <p>Tenis Addidas</p>
          <span>
            {" "}
            {"R$"}
            {myTenis[0]}
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis">
          {" "}
          <img src={Tenis1} alt="tenis1"></img>
          <p>Tenis Addidas</p>
          <div className="riscado">
            <span className="preço-extra">R$ 299,90</span>
            <span>
              {" "}
              {"R$"}
              {myTenis[1]}
            </span>
          </div>
          <button>COMPRAR</button>
        </div>
        <div className="tenis">
          {" "}
          <img src={Tenis3} alt="tenis1"></img>
          <p>Tenis Addidas</p>
          <span>
            {" "}
            {"R$"}
            {myTenis[2]}
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis">
          {" "}
          <img src={Tenis4} alt="tenis1"></img>
          <p>Tenis Addidas</p>
          <span>
            {" "}
            {"R$"}
            {myTenis[3]}
          </span>
          <button>COMPRAR</button>
        </div>

        <div className="tenis">
          {" "}
          <img src={Tenis5} alt="tenis1"></img>
          <p>Tenis Addidas</p>
          <span>
            {" "}
            {"R$"}
            {myTenis[4]}
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis">
          {" "}
          <img src={Tenis6} alt="tenis1"></img>
          <p>Tenis Addidas</p>
          <span>
            {" "}
            {"R$"}
            {myTenis[5]}
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis">
          {" "}
          <img src={Tenis7} alt="tenis1"></img>
          <p>Addidas</p>
          <span>
            {" "}
            {"R$"}
            {myTenis[6]}
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis">
          {" "}
          <img src={Tenis8} alt="tenis1"></img>
          <p>Addidas</p>
          <div className="riscado">
            <span className="preço-extra">R$ 199,90</span>

            <span>
              {" "}
              {"R$"}
              {myTenis[7]}
            </span>
          </div>
          <button>COMPRAR</button>
        </div>
        <div className="tenis">
          {" "}
          <img src={Tenis9} alt="tenis1"></img>
          <p>Addidas</p>
          <span>
            {" "}
            {"R$"}
            {myTenis[8]}
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis">
          {" "}
          <img src={Tenis1} alt="tenis1"></img>
          <p>Addidas</p>
          <span>
            {" "}
            {"R$"}
            {myTenis[9]}
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis">
          {" "}
          <img src={Tenis1} alt="tenis1"></img>
          <p>Addidas</p>
          <span>
            {" "}
            {"R$"}
            {myTenis[6]}
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis">
          {" "}
          <img src={Tenis3} alt="tenis1"></img>
          <p>Addidas</p>
          <span>
            {" "}
            {"R$"}
            {myTenis[2]}
          </span>
          <button>COMPRAR</button>
        </div>
      </div>

      {/* {myTenis} */}
      {/* {tenis[0].items !== undefined &&
        tenis[0].items.map((item) => (
          <div key={item.id}>
            {item.sku}
            {item.path}
            {item.items}
          </div>
        ))} */}
    </Container>
  );
};

export default Tenis;
