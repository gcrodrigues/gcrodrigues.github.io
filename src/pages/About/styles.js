import styled, { keyframes } from "styled-components";
import { darken } from "polished";

const shake = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }

  20%, 60%{
    transform: rotate(5deg);
  }
  40%, 80%{
    transform: rotate(-5deg);
  }
`;

export const Content = styled.div`
  padding: 2rem;

  @media (min-width: 1000px) {
    padding: 4rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div {
    perspective: 100rem;
    display: flex;
    flex-direction: column;

    max-width: 1024px;

    @media (min-width: 1000px) {
      display: grid;
      grid-template-rows: 1fr 20rem;
      grid-template-columns: 30% auto;
      grid-column-gap: 3rem;
      grid-row-gap: 2rem;
      grid-template-areas:
        "card about about"
        "card tech tech"
        ". download download";
    }

    > a {
      grid-area: download;

      color: white;
      background-color: #53b853;

      margin: 2rem 0;
      padding: 1rem 2.5rem;
      border-radius: 0.5rem;

      font-weight: bold;
      font-size: 1.6rem;
      text-transform: uppercase;
      text-decoration: none;
      text-align: center;

      transition: background-color 0.2s;

      &:hover,
      &:focus {
        background-color: ${darken(0.1, "#53b853")};
      }
    }
    h2 {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }
  }
`;

export const AboutCard = styled.div`
  grid-area: card;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 45rem;

  height: fit-content;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 2.5rem;
      margin-top: 20px;
    }

    p {
      font-size: 1.6rem;
      margin: 8px 0;
      position: relative;

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        margin-top: 10px;

        background-color: ${(props) => props.theme.colors.text};
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 75%;
  height: 75%;
  border: solid 0.5rem transparent;
  border-radius: 50%;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -0.5rem;
    border-radius: inherit;
    background: ${(props) =>
      `linear-gradient(-45deg, ${props.theme.colors.primary}, ${props.theme.colors.secundary})`};
  }

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const AboutMe = styled.div`
  grid-area: about;
  margin: 10px 0;

  span {
    color: ${(props) => props.theme.colors.secundary};
  }

  p {
    font-size: 1.8rem;
    line-height: 1.6;

    & + p {
      margin-top: 10px;
    }
  }
`;

export const Techs = styled.div`
  grid-area: tech;
  margin: 10px 0;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, 7rem);
    grid-gap: 1rem;
  }
`;

export const Tech = styled.div`
  width: 7rem;
  height: 7rem;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    animation: ${shake} 0.3s linear;
    background-image: none;

    p {
      opacity: 1;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.2s;
    text-align: center;
  }
`;
