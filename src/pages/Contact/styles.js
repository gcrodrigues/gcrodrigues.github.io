import styled from "styled-components";
import { darken } from "polished";

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  height: 421px;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  padding: 20px 30px;

  h2 {
    font-size: 1.8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 40%;
  min-width: 300px;
  max-width: 400px;

  padding: 20px 30px;
  border-radius: 4px;
  border: ${(props) =>
    props.theme.title === "light" ? "1px solid #ccc" : "none"};

  background-color: ${(props) => props.theme.colors.complement};

  h2 {
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }
  p {
    text-align: center;
  }

  span {
    color: ${(props) => props.theme.colors.text};
    font-size: 0.8rem;
    line-height: 1rem;
    font-weight: 600;
    margin-top: 15px;
  }

  input {
    height: 40px;
    padding: 20px 10px;
    border-radius: 3px;
    border: 2px solid ${(props) => props.theme.colors.inputBorder};
    background-color: ${(props) => props.theme.colors.background};
    color: #f6f6f6;
    margin-top: 8px;
    transition: border 0.3s ease;
    font-size: 1rem;
    transition: all 0.2s;

    &:focus {
      border-color: ${(props) => props.theme.colors.secundary};
    }
  }

  textarea {
    padding: 10px;
    border-radius: 3px;
    border: 2px solid ${(props) => props.theme.colors.inputBorder};
    background-color: ${(props) => props.theme.colors.background};
    color: #f6f6f6;
    margin-top: 10px;
    font-size: 1rem;
    resize: initial;
    transition: all 0.2s;

    &:focus {
      border-color: ${(props) => props.theme.colors.secundary};
    }
  }

  ul {
    list-style: none;
    display: flex;
    margin-top: 20px;
    align-self: center;
    width: 40%;
    display: flex;
    justify-content: space-around;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 15px;
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: ${(props) => props.theme.colors.secundary};
  border-radius: 3px;
  border: 0;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      `${darken(0.05, props.theme.colors.secundary)}`};
  }

  svg {
    margin-left: 5px;
  }
`;
