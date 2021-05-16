import styled, { css } from "styled-components";
interface ContainerProps {
  isLoading?: boolean;
}
export const Container = styled.button<ContainerProps>`
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2%;
  cursor: pointer;
  //margin-top: 16px;
  border-radius: 0px 2px 0px 2px;
  background-color: #cb0d1f;
  color: #fff;

  font-weight: 600;
  width: 100%;
  height: 40px;
  transition: 0.1s;

  > a {
    text-decoration: none;
    color: #fff;
  }
  ${(props) =>
    props.isLoading &&
    css`
      &:after {
        content: "";
        animation: spin 500ms linear infinite;
        position: relative;
        margin-left: 1rem;
        width: 1rem;
        height: 1rem;
        border: 2px solid #fff;
        border-top-color: transparent;
        border-left-color: transparent;
        border-radius: 50%;
        animation: spin 500ms linear infinite;
        opacity: 1;
      }
    `}
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(380deg);
    }
  }
  &:hover {
    background-color: #cb0d1f;
    ${(props) =>
      props.isLoading &&
      css`
        &:after {
          content: "";
          animation: spin 500ms linear infinite;
          position: relative;
          margin-left: 1rem;
          width: 1rem;
          height: 1rem;
          border: 2px solid #fff;
          border-top-color: transparent;
          border-left-color: transparent;
          border-radius: 50%;
          animation: spin 500ms linear infinite;
          opacity: 1;
        }
      `}
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(380deg);
      }
    }
    &:hover {
      background-color: #cb0d1f;
    }
  }
`;
