// import React, { useState, useEffect } from "react";
// import api from "../../services/api";
// import { Container } from "./styles";
// import Tenis1 from "../../assets/shoes1.jpg";
// import Tenis2 from "../../assets/ss.png";
// import Tenis3 from "../../assets/shoes-3.jpg";
// import Tenis4 from "../../assets/shoes-4.jpg";
// import Tenis5 from "../../assets/shoes-5.jpg";
// import Tenis6 from "../../assets/shoes-6.jpg";
// import Tenis7 from "../../assets/shoes-7.jpg";
// import Tenis8 from "../../assets/shoes-8.jpg";
// import Tenis9 from "../../assets/shoes-9.jpg";
// interface Item {
//   id: number;
//   sku: string;
//   path: string;
//   price: string;
//   items: string;
// }

// const Tenis: React.FC = () => {
//   const [tenis, setTenis] = useState<any>([]);
//   const [newTenis, setNewTenis] = useState([]);

//   useEffect(() => {
//     api.get(`tenis`).then((response) => {
//       console.log(response.data);
//       const tenis = response.data.tenis;
//       setTenis(tenis);
//       console.log(tenis);
//     });
//   }, []);

//   // useEffect(() => {
//   //   console.log(tenis[0]);
//   // }, [tenis]);
//   let tenisPrice: any = [];
//   const myTenis = tenis[0]?.items?.map((item) => {
//     tenisPrice.push(item.price);
//     console.log(tenisPrice[0]);
//     return (
//       <div key={item.id}>
//         {/* {item.sku}
//       {item.path}
//     {item.items} */}
//         {item.price}
//       </div>
//     );
//   });
//   console.log("aqui" + tenisPrice[0]);
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
  name: string;
  sku: string;
  path: string;
  price: string;
  items: string;
}

interface ResponseProps {
  items: Item[];
}

const Tenis: React.FC = () => {
  const [tenis, setTenis] = useState<ResponseProps[]>([]);
  const [newTenis, setNewTenis] = useState([]);

  useEffect(() => {
    api.get(`tenis`).then((response) => {
      setTenis(response.data.tenis);
    });
  }, []);
  return (
    <Container>
      <div className="tenis-container1">
        {tenis[0] &&
          tenis[0].items.map((ten) => (
            <div key={ten.id} className="tenis">
              {" "}
              <img src={Tenis7} alt="tenis1" />
              <p>{ten.name}</p>
              <span>
                {" "}
                {"R$"}
                {ten.price}
              </span>
              <button>COMPRAR</button>
            </div>
          ))}
        <div className="tenis">
          {" "}
          <img src={Tenis1} alt="tenis1"></img>
          <p>Tenis Addidas</p>
          <div className="riscado">
            <span className="preço-extra">R$ 299,90</span>
            <span>
              {" "}
              {"R$"}
              299,90
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
            299,90
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis1">
          {" "}
          <img src={Tenis4} alt="tenis1"></img>
          <p>Tenis Addidas</p>
          <span>
            {" "}
            {"R$"}
            299,90
          </span>
          <button>COMPRAR</button>
        </div>

        <div className="tenis1">
          {" "}
          <img src={Tenis5} alt="tenis1"></img>
          <p>Tenis Addidas</p>
          <span>
            {" "}
            {"R$"}
            299,90
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis1">
          {" "}
          <img src={Tenis6} alt="tenis1"></img>
          <p>Tenis Addidas</p>
          <span>
            {" "}
            {"R$"}
            299,90
          </span>
          <button>COMPRAR</button>
        </div>
        <div className="tenis1">
          {" "}
          <img src={Tenis7} alt="tenis1"></img>
          <p>Addidas</p>
          <span>
            {" "}
            {"R$"}
            299,90
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
