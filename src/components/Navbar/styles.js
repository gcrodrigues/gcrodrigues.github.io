import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 8rem;
  padding: 0 1.5rem;

  background-color: ${(props) => props.theme.colors.navbar};

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 770px) and (max-height: 421px) {
    width: calc(8rem + 0.72rem);
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.72rem;
    }

    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.complement};
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.secundary};
    }
  }

  @media (min-width: 770px) {
    width: 8rem;
    height: 100%;
    padding: 2rem 0;

    flex-direction: column;
  }

  > button:first-child {
    @media (min-width: 770px) {
      display: none;
    }
  }

  h1 {
    font-size: 1rem;
    text-align: center;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    letter-spacing: 0.2rem;
    color: #fff;

    span {
      color: #fff;
      font-size: 2.5rem;
      font-family: "Balsamiq Sans", Arial, Helvetica, sans-serif;
      font-weight: 100;
    }
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.colors.icons};
    filter: brightness(100%);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }
  }

  > div {
    @media (max-width: 770px) {
      width: 100%;

      position: absolute;
      left: ${(props) => (props.isOpen ? "0" : "-100%")};
      top: 7.5rem;

      background-color: ${(props) => props.theme.colors.navbar};
      padding: 1rem 1.5rem;

      transition: left 0.2s;

      z-index: 2;

      &:after {
        content: "";
        position: absolute;
        height: 100vh;
        width: 100vw;
        left: 0;
        top: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.6);
        transition: opacity 1s ease-out;

        opacity: ${(props) => (props.isOpen ? "1" : "0")};
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 770px) {
    margin: 1rem 0;
  }
`;

export const Anchor = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  padding: 0 1.5rem;
  color: ${(props) => props.theme.colors.icons};
  text-decoration: none;

  @media (max-width: 770px) {
    padding: 0;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 770px) {
    border-radius: 50%;
    &:not(:first-child) {
      margin: 1.5rem 0 0;
    }
  }

  p {
    font-size: 1.4rem;
    color: #fff;
    font-weight: bold;
  }
`;
