import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: ${({ hidden }) => (hidden ? "hidden" : "unset")};

  @media (max-width: 770px) {
    align-items: flex-end;
    justify-content: center;
  }
`;

export const Section = styled.section`
  width: calc(100% - 8rem);
  height: 100%;
  @media (max-width: 770px) {
    width: 100%;
    height: calc(100% - 8rem);
  }
`;
