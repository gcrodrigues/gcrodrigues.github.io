import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  padding: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3rem 0;

  animation: ${rotate} 1s infinite linear;

  svg {
    color: ${(props) => props.theme.colors.text};
  }
`;
