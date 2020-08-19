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
  border-radius: 0.5rem;

  text-align: center;

  img {
    max-width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;

  padding: 1rem 1.5rem;
  border-bottom: ${(props) =>
    props.theme.title === "light" ? "1px solid #ccc" : "none"};

  border-left: ${(props) =>
    props.theme.title === "light" ? "1px solid #ccc" : "none"};

  border-right: ${(props) =>
    props.theme.title === "light" ? "1px solid #ccc" : "none"};

  border-radius: 0 0 0.5rem 0.5rem;

  h2 {
    font-size: 2.4rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.6rem;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    a {
      width: 45%;
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      padding: 0.8rem 0;
      margin-top: 1rem;
      border-radius: 0.5rem;
      font-weight: 600;
      background-color: ${(props) => props.theme.colors.secundary};
      transition: all 0.15s ease-out;
      font-size: 1.6rem;

      &:hover {
        background-color: ${darken(0.1, "#9b1fff")};
      }

      &:nth-child(2n) {
        background-color: ${(props) => props.theme.colors.complement};
        border: 0.1rem solid ${(props) => props.theme.colors.secundary};
        color: ${(props) => props.theme.colors.secundary};
      }

      &:nth-child(2n):hover {
        background-color: ${lighten(0.02, "#2a2e35")};
      }
    }
  }
`;
