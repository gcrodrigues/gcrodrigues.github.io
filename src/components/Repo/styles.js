import styled from "styled-components";
import { lighten, darken } from "polished";

export const Card = styled.div`
  width: 100%;
  max-width: 720px;

  display: inline-flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.complement};
  color: ${(props) => props.theme.colors.text};

  padding: 0;
  border-radius: 5px;

  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    max-width: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

export const Content = styled.div`
  padding: 10px 15px;
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: ${(props) =>
    props.theme.title === "light" ? "1px solid #ccc" : "none"};
  border-left: ${(props) =>
    props.theme.title === "light" ? "1px solid #ccc" : "none"};
  border-right: ${(props) =>
    props.theme.title === "light" ? "1px solid #ccc" : "none"};
  border-radius: 0 0 5px 5px;

  p {
    margin: 5px 0;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    a {
      width: 45%;
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      padding: 8px 0;
      margin-top: 10px;
      border-radius: 5px;
      font-weight: 600;
      background-color: ${(props) => props.theme.colors.secundary};
      transition: all 0.15s ease-out;

      &:hover {
        background-color: ${darken(0.1, "#9b1fff")};
      }

      &:nth-child(2n) {
        background-color: ${(props) => props.theme.colors.complement};
        border: 1px solid ${(props) => props.theme.colors.secundary};
        color: ${(props) => props.theme.colors.secundary};
      }

      &:nth-child(2n):hover {
        background-color: ${lighten(0.02, "#2a2e35")};
      }
    }
  }
`;
