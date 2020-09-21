import styled from "styled-components";
import { lighten, darken } from "polished";

export const Card = styled.a`
  width: 100%;
  min-height: 150px;

  display: flex;
  flex-direction: column;

  text-decoration: none;
  
  color: ${(props) => props.theme.colors.text};

  padding:  1.5rem; 
  border-radius: 0.6rem;
  border:.1rem solid ${props => props.theme.colors.secundary};

  transition: transform .2s, background-color .2s;

  &:hover{
    transform: scale(1.02);
    background-color: rgba(150,150,150,.1);
  }

  h2{
    font-size: 2rem;
  }

  p{
    margin: 0.5rem 0;
    font-size:1.6rem;
  }

  div{
    margin-top: auto;
    margin-left: auto;
  }

`;

export const Tag = styled.span`
  background-color: ${props => 
    props.lang === "TypeScript"
      ? "#007acd"
      : props.lang === "JavaScript"
        ? "#f5dd19"
        : props.lang === "CSS"
          ? "#573f7d"
          : "#e44c27"
  };

  color: ${props => props.lang === "JavaScript"? "#1d1d1d" : "#fff"};
  padding: 2px 8px;
  border-radius: .4rem;

  font-size:1.4rem;
  font-weight: 600;

  & + span {
    margin-left: 5px;
  }
`;
