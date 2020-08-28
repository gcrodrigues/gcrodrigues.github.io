import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  position: fixed;
  background-color: ${(props) => props.theme.colors.navbar};
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 8rem;
  padding: 0 1.5rem;

  @media (min-width: 770px) and (max-height: 450px) {
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
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 770px) {
    flex-direction: column;
    height: 100%;
    min-height: 450px;
  }

  li {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  li:first-child {
    margin-bottom: 2rem;

    @media (max-width: 770px) {
      margin-bottom: 0;
    }
  }

  li:last-child {
    margin-top: auto;
    padding: 1rem 0;
    cursor: pointer;
    color: ${(props) => props.theme.colors.icons};
    filter: brightness(100%);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }

    @media (max-width: 770px) {
      /* display: none; */
      padding: 0;
      margin-top: 0;
    }
  }
`;

export const Anchor = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  padding: 0 2.5rem;
  color: ${(props) => props.theme.colors.icons};
`;
