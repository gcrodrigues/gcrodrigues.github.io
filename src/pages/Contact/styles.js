import styled from "styled-components";
import { darken, lighten } from "polished";

export const Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 40%;
  min-width: 322px;
  max-width: 400px;

  padding: 2rem 3rem;
  border-radius: 0.4rem;
  border: ${(props) =>
    props.theme.title === "light" ? "1px solid #eee" : "none"};

  background-color: ${(props) => props.theme.colors.complement};

  h2 {
    font-weight: 500;
    text-align: center;
    margin: 0 0 1rem;
    font-size: 2.4rem;
  }
  p {
    text-align: center;
    font-size: 1.6rem;
  }

  input {
    height: 4rem;
    padding: 2rem 1rem;
    border-radius: 0.3rem;
    border: 0.2rem solid ${(props) => props.theme.colors.inputBorder};
    background-color: ${(props) => props.theme.colors.background};
    color: #f6f6f6;
    margin-top: 1.5rem;
    transition: border 0.3s ease;
    font-size: 1.6rem;
    transition: all 0.2s;

    &:focus {
      border-color: ${(props) => props.theme.colors.secundary};
    }
  }

  textarea {
    padding: 1rem;
    border-radius: 0.3rem;
    border: 0.2rem solid ${(props) => props.theme.colors.inputBorder};
    background-color: ${(props) => props.theme.colors.background};
    color: #f6f6f6;
    margin-top: 1.5rem;
    font-size: 1.6rem;
    resize: initial;
    transition: all 0.2s;

    &:focus {
      border-color: ${(props) => props.theme.colors.secundary};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.5rem;
  padding: 1rem;
  font-size: 1.6rem;
  color: #fff;
  background-color: ${(props) => props.theme.colors.secundary};
  border-radius: 0.3rem;
  border: 0;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      `${darken(0.05, props.theme.colors.secundary)}`};
  }

  svg {
    margin-left: 0.5rem;
  }
`;

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;

  div {
    width: 100vw;
    height: 100vh;
    position: relative;

    svg {
      max-width: 1500px;
      position: absolute;
      @media (max-width: 500px) {
        transform: scale(2);
      }

      &:first-child {
        bottom: -85rem;
        left: -45rem;
      }

      &:last-child {
        top: -70rem;
        right: -50rem;
      }
    }
  }
`;

/* svg:first-child {
  position: absolute;
  left: -45rem;
  top: -15rem;

  @media (max-width: 500px) {
    bottom: -15rem;
    top: auto;
  }
}
svg:last-child {
  position: absolute;
  bottom: -10rem;
  right: -100rem;
} */
