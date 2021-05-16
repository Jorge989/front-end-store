import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 13px;

  padding-left: 30px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #cb0d1f;
  a {
    padding-right: 150px;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    width: 1550px;
  }
  @media screen and (max-width: 769px) {
    display: flex;
    padding: 13px;

    padding-left: 30px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #cb0d1f;
    width: 1200px;
    a {
      padding-right: 150px;
      cursor: pointer;
      color: #fff;
      font-weight: 600;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
