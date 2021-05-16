import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  @media (max-width: 1024px) {
    width: 1500px;
    height: 1350px;
    display: flex;
  }
  @media (max-width: 769px) {
    width: 100%;
    height: 1350px;
    display: flex;
  }
  @media (max-width: 576px) {
    width: 100%;
    height: 6700px;
    display: flex;
    flex-direction: column;
  }
`;
export const Sidebar2 = styled.aside`
  background-color: #fff;
  border: 1px solid #000;
  flex: 1;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .titulos {
    h1 {
      color: #cb0d1f;
      padding-left: 20px;
      padding-top: 10px;
    }
    h3 {
      color: #5d8f8a;
      padding-left: 20px;
      padding-top: 10px;
    }
  }
  nav {
    padding-left: 40px;
    padding-top: 0px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    .cores {
      padding-left: 0px;
      padding-top: 0px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      h3 {
        color: #5d8f8a;
        margin-left: -20px;
      }
      .cores2 {
        padding-top: 5px;
        display: flex;
        flex-direction: row;
        gap: 5px;
        width: 100%;
        .red {
          width: 50px;
          height: 20px;
          margin-left: -20px;
          background-color: #cc0d1d;
        }
        .orange {
          width: 50px;
          height: 20px;
          background-color: #f26324;
        }
        .blue {
          width: 50px;
          height: 20px;
          background-color: #28a3aa;
        }
      }
      .tipo {
        padding-top: 20px;
      }
    }
    li {
      padding: 10px 0;
    }
  }
  @media screen and (max-width: 1024px) {
    background-color: #fff;
    border: 1px solid #000;
    flex: 1;
    margin: 20px;
    width: 900px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    .titulos {
      h1 {
        color: #cb0d1f;
        padding-left: 20px;
        padding-top: 10px;
      }
      h3 {
        color: #5d8f8a;
        padding-left: 20px;
        padding-top: 10px;
      }
    }
    nav {
      padding-left: 40px;
      padding-top: 0px;
      display: flex;
      width: 250px;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      .cores {
        padding-left: 0px;
        padding-top: 0px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        h3 {
          color: #5d8f8a;
          margin-left: -20px;
        }
        .cores2 {
          padding-top: 5px;
          display: flex;
          flex-direction: row;
          gap: 5px;
          width: 100%;
          .red {
            width: 50px;
            height: 20px;
            margin-left: -20px;
            background-color: #cc0d1d;
          }
          .orange {
            width: 50px;
            height: 20px;
            background-color: #f26324;
          }
          .blue {
            width: 50px;
            height: 20px;
            background-color: #28a3aa;
          }
        }
        .tipo {
          padding-top: 20px;
        }
      }
      li {
        padding: 10px 0;
      }
    }
  }
  @media (max-width: 769px) {
    background-color: #fff;
    border: 1px solid #000;
    flex: 1;
    margin: 20px;
    width: 800px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    .titulos {
      h1 {
        color: #cb0d1f;
        padding-left: 20px;
        padding-top: 10px;
      }
      h3 {
        color: #5d8f8a;
        padding-left: 20px;
        padding-top: 10px;
      }
    }
    nav {
      padding-left: 40px;
      padding-top: 0px;
      display: flex;
      width: 250px;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      .cores {
        padding-left: 0px;
        padding-top: 0px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        h3 {
          color: #5d8f8a;
          margin-left: -20px;
        }
        .cores2 {
          padding-top: 5px;
          display: flex;
          flex-direction: row;
          gap: 5px;
          width: 100%;
          .red {
            width: 50px;
            height: 20px;
            margin-left: -20px;
            background-color: #cc0d1d;
          }
          .orange {
            width: 50px;
            height: 20px;
            background-color: #f26324;
          }
          .blue {
            width: 50px;
            height: 20px;
            background-color: #28a3aa;
          }
        }
        .tipo {
          padding-top: 20px;
        }
      }
      li {
        padding: 10px 0;
      }
    }
  }
  @media (max-width: 576px) {
    background-color: #fff;
    border: 1px solid #000;
    flex: 1;
    margin: 20px;
    height: 1700px;
    margin-top: 100px;
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .titulos {
      h1 {
        color: #cb0d1f;
        padding-left: 20px;
        padding-top: 10px;
        font-size: 60px;
      }
      h3 {
        color: #5d8f8a;
        padding-left: 20px;
        padding-top: 30px;
        font-size: 40px;
      }
    }
    nav {
      padding-left: 90px;

      padding-top: 30px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      font-size: 60px;
      .cores {
        padding-left: 0px;
        padding-top: 30px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        h3 {
          color: #5d8f8a;
          padding-top: 30px;
          margin-left: -60px;
        }
        .cores2 {
          padding-top: 30px;
          display: flex;
          margin-top: -10px;
          margin-left: -40px;
          flex-direction: row;
          gap: 5px;
          width: 100%;
          .red {
            width: 150px;
            height: 60px;
            margin-left: -20px;
            background-color: #cc0d1d;
          }
          .orange {
            width: 150px;
            height: 60px;
            background-color: #f26324;
          }
          .blue {
            width: 150px;
            height: 60px;
            background-color: #28a3aa;
          }
        }
        .tipo {
          padding-top: 20px;
        }
      }
      li {
        padding: 10px 0;
      }
    }
  }
`;
export const Wrapper = styled.div`
  flex: 3;
  padding: 10px;

  .paginação {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: 60px;
    margin-left: 600px;
    margin-top: 300px;
    font-weight: 600;
    cursor: pointer;
    background-color: green;
    svg {
      color: #28a3aa;
      width: 200px;
      height: 200px;
    }
    .pagina1 {
      color: #cc0d1d;
    }
  }
  @media (max-width: 576px) {
    flex: 3;
    padding: 10px;
    .paginação {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 40px;
      font-size: 50px;
      height: 60px;
      font-weight: 900;
      cursor: pointer;
      svg {
        color: #28a3aa;
      }
      .pagina1 {
        color: #cc0d1d;
      }
    }
  }
`;
export const Banner = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;
export const Info = styled.div`
  margin-top: -10px;
  h2 {
    color: #cb0d1f;
    font-weight: 400;
  }
  hr {
    width: 100%;
    margin-top: 2px;
    border: 0.1px solid #5d8f8a;
  }
  .hr2 {
    margin-top: 5px;
  }
  .options {
    display: flex;
    gap: 2px;
    width: 7%;
    margin-top: 5px;
    align-items: center;
    gap: 5px;

    .grid {
      margin-top: 1px;
      width: 20px;
      height: 24px;
    }
    .grid2 {
      width: 19px;
      height: 16px;
    }
  }
  .filtro {
    margin-top: -20px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    p {
      color: #5d8f8a;
      font-size: 15px;
      font-weight: bold;
    }
    select {
      width: 15%;
      margin-bottom: 2px;
      border: 1px solid #000;
      border-radius: 3px;
    }
  }
  @media (max-width: 769px) {
    margin-top: -10px;
    width: 800px;
    margin-left: 50px;
    h2 {
      color: #cb0d1f;
      font-weight: 400;
      font-size: 40px;
    }
    hr {
      width: 100%;
      margin-top: 2px;
      border: 0.1px solid #5d8f8a;
    }
    .hr2 {
      margin-top: 5px;
    }
    .options {
      display: flex;
      gap: 2px;
      width: 7%;
      margin-top: 5px;
      align-items: center;
      gap: 5px;

      .grid {
        margin-top: 1px;
        width: 20px;
        height: 24px;
      }
      .grid2 {
        width: 19px;
        height: 16px;
      }
    }
    .filtro {
      margin-top: -20px;
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      p {
        color: #5d8f8a;
        font-size: 30px;
        font-weight: bold;
      }
      select {
        width: 15%;
        font-size: 30px;
        margin-bottom: 2px;
        border: 1px solid #000;
        border-radius: 3px;
      }
    }
  }
  @media (max-width: 576px) {
    margin-top: 100px;
    width: 1180px;

    h2 {
      color: #cb0d1f;
      font-weight: 400;

      font-size: 80px;
    }
    hr {
      width: 100%;
      margin-top: 2px;
      border: 0.1px solid #5d8f8a;
      display: none;
    }
    .hr2 {
      margin-top: 5px;
    }
    .options {
      display: flex;
      gap: 2px;
      width: 20%;
      margin-top: 20px;
      align-items: center;
      gap: 5px;

      .grid {
        margin-top: 1px;
        width: 90px;
        height: 75px;
      }
      .grid2 {
        width: 90px;
        height: 60px;
      }
    }
    .filtro {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      p {
        color: #5d8f8a;
        font-size: 60px;
        margin-top: 10px;
        margin-right: 80px;
        font-weight: bold;
      }
      select {
        width: 55%;
        height: 100px;
        font-size: 50px;
        margin-bottom: 2px;
        border: 1px solid #000;
        border-radius: 3px;
      }
    }
  }
`;
