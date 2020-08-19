import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-template-rows: repeat(2, 1fr);
`;
