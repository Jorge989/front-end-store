import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  //padding: 13px;
  flex-direction: row;
  //height: 120px;
  padding: 10px 0;
  //padding-left: 30px;
  justify-content: center;
  align-items: center;

  background-color: #cb0d1f;
  ul {
    display: flex;

    color: #fff;
    font-weight: 600;
    li {
      display: flex;
      padding: 20px 20px;

      a {
        text-decoration: none;
        color: white;
      }
      padding: 20px 20px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 1200px;
  }
  @media (max-width: 769px) {
    width: 1200px;
  }
  @media (max-width: 576px) {
    height: 200px;
    width: 1250px;
    ul {
      display: flex;

      color: #fff;
      font-weight: 600;
      li {
        display: flex;
        padding: 2px 2px;

        a {
          text-decoration: none;
          color: white;
          font-size: 30px;
        }
        padding: 20px 20px;
      }
    }
  }
`;
