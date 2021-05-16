import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  .tenis-container1 {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    /* flex-direction: row; */
    gap: 20px;

    .tenis {
      display: flex;
      align-items: center;
      flex-direction: column;

      width: 220px;
      height: 270px;
      .riscado {
        display: flex;
        justify-content: space-between;

        gap: 15px;
      }
      .preço-extra {
        text-decoration: line-through;
        font-weight: 400;
        color: #000;
        text-decoration: line;
      }
      span {
        display: flex;
        font-weight: bold;
        color: #cb0d1f;
      }
      img {
        border: 1px solid grey;
        width: 200px;
        height: 250px;
      }
    }
  }
  button {
    background-color: #7fbdb8;
    width: 90%;
    color: #fff;
    font-weight: 900;
    letter-spacing: 4px;
    border-radius: 4px;
    box-shadow: 0px 1px 2px 1px #616161;
    height: 20%;
    cursor: pointer;
  }
  button:hover {
    background-color: #7cc5bf;
  }
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .tenis-container1 {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    button {
      background-color: #7fbdb8;
      width: 90%;
      color: #fff;
      font-weight: bold;
      letter-spacing: 4px;
      border-radius: 4px;
      box-shadow: 0px 1px 2px 1px #616161;
      height: 30%;
      cursor: pointer;
    }
    button:hover {
      background-color: #7cc5bf;
    }
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    height: 4000px;
    width: 1100px;
    .tenis-container1 {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;

      .riscado {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 15px;
      }
      .preço-extra {
        text-decoration: line-through;
        font-weight: 400;
        color: #000;
        text-decoration: line;
      }
      .tenis {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 450px;
        height: 400px;
        p {
          font-size: 50px;
        }
        span {
          font-size: 50px;
        }
        img {
          border: 1px solid grey;
          width: 500px;
          height: 500px;
        }
      }
    }
    button {
      display: none;
      background-color: #7fbdb8;
      width: 90%;
      color: #fff;
      font-weight: bold;
      letter-spacing: 4px;
      border-radius: 4px;
      box-shadow: 0px 1px 2px 1px #616161;
      height: 20%;
      cursor: pointer;
    }
    button:hover {
      background-color: #7cc5bf;
    }
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    height: 4000px;
    .tenis-container1 {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 310px;

      .riscado {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 15px;
      }
      .preço-extra {
        text-decoration: line-through;
        font-weight: 400;
        color: #000;
        text-decoration: line;
      }
      .tenis {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 450px;
        height: 400px;
        p {
          font-size: 50px;
        }
        span {
          font-size: 50px;
        }
        img {
          border: 1px solid grey;
          width: 500px;
          height: 500px;
        }
      }
    }
    button {
      display: none;
      background-color: #7fbdb8;
      width: 90%;
      color: #fff;
      font-weight: bold;
      letter-spacing: 4px;
      border-radius: 4px;
      box-shadow: 0px 1px 2px 1px #616161;
      height: 20%;
      cursor: pointer;
    }
    button:hover {
      background-color: #7cc5bf;
    }
  }
`;
