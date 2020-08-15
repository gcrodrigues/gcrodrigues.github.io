import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: relative;

  @media (max-width: 1020px) {
    flex-direction: column-reverse;
    padding: 40px;
  }

  img {
    height: 100%;
  }
`;

const Pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255,199,52.5);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;

  @media (max-width: 770px) {
    width: 100%;
  }
  p {
    font-size: 1.2em;
    ${(props) => props.theme.colors.text}
    margin-top: 10px;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    background-color: #ffc734;
    border-radius: 3px;
    padding: 0 10px;
    /* box-shadow: 0 0 0 rgba(255, 199, 52, 0.5); */
    animation: ${Pulse} 2s infinite;
  }
`;

export const Image = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  @media (max-width: 1020px) {
    display: none;
  }

  @media (max-width: 1300px) {
    width: 400px;
    min-width: 400px;
    min-height: 400px;
    height: 400px;
    overflow: hidden;
    border-radius: calc(400px / 2);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 0 30px;
  border: 1px solid #aaa;
  border-radius: 50px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 1em;
  margin-top: 15px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(75, 75, 75, 0.1);
  }

  svg {
    margin-left: 10px;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Bg = styled.div`
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cpath d='M394.5 170.1c44.4 11.4 108.2 9.8 143.2 36.1 35 26.3 41.2 80.6 23.8 124.3-17.3 43.8-58.2 77-92.6 114.8-34.4 37.8-62.3 80.1-94.9 75.2-32.5-4.9-69.6-57.1-95.9-90.2-26.3-33.2-41.9-47.4-65.3-61.8-23.4-14.4-54.7-29-78.2-57.2-23.5-28.2-39.1-70-33-109.6 6.1-39.7 33.8-77.1 70.5-92 36.7-14.9 82.3-7.3 117.6 8.7s60.4 40.3 104.8 51.7z'/%3E%3C/svg%3E");
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  background: linear-gradient(90deg, #3f5efb, #fc466b) !important;
  position: absolute;
  height: 100% !important;
  width: 100% !important;
  z-index: -1;
  transform: scale(2);
  right: -150px;
  bottom: 0;
`;
