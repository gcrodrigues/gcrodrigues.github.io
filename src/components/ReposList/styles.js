import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
`;
