import styled from "styled-components";

export const Container = styled.div`
  ul {
    list-style: none;
    display: flex;
    margin-top: 2rem;
    align-self: center;
    width: fit-content;
    display: flex;
    justify-content: space-around;
    color: ${(props) => props.theme.colors.complement};

    li {
      transition: color 0.2s;

      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
        &:hover {
          color: ${(props) => props.theme.colors.secundary};
        }
      }

      + li {
        margin-left: 1rem;
      }
    }
  }
`;
