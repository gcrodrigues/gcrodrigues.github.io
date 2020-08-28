import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    background: ${(props) => props.theme.colors.complement};
    padding: 2rem;
    border-radius: 0.5rem;

    > a {
      padding: 1rem 2.5rem;
      font-size: 1.6rem;
      color: white;
      text-decoration: none;
      background-color: ${(props) => props.theme.colors.secundary};
      margin: 1rem 0;
    }

    h2 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.5rem;
    }

    ul {
      a {
        margin-top: 0;
      }
    }
  }
`;
