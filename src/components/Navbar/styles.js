import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  position: fixed;
  background-color: ${(props) => props.theme.colors.navbar};
  left: 0;
  top: 0;
  z-index: 1;
  width: 5rem;

  @media (min-width: 771px) and (max-height: 450px) {
    width: calc(5rem + 0.45rem);
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.45rem;
    }

    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.complement};
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.secundary};
    }
  }

  @media (max-width: 770px) {
    width: 100%;
    height: 5rem;
    padding: 0px 10px;
  }

  @media (min-width: 771px) {
    height: 100%;
    padding: 20px 0px;
  }

  h1 {
    font-size: 0.6rem;
    text-align: center;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    color: #fff;

    span {
      color: #fff;
      font-size: 1.6rem;
      font-family: "Balsamiq Sans", Arial, Helvetica, sans-serif;
      font-weight: 100;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  list-style: none;

  @media (max-width: 770px) {
    flex-direction: row;
    justify-content: center;
  }

  li {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  li:first-child {
    margin-bottom: 20px;

    @media (max-width: 770px) {
      margin-bottom: 0;
    }
  }

  li:last-child {
    margin-top: auto;
    padding: 10px 0;
    cursor: pointer;
    color: ${(props) => props.theme.colors.icons};
    filter: brightness(100%);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }

    @media (max-width: 770px) {
      display: none;
    }
  }
`;

export const Anchor = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  padding: 0 25px;
  color: ${(props) => props.theme.colors.icons};
`;
