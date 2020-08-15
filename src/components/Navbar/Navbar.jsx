import React, { useContext } from "react";
import { MdFolderSpecial, MdChat } from "react-icons/md";
import { FaFileCode, FaHome, FaCloudMoon, FaSun } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { ThemeContext } from "styled-components";
import { Container, List, Anchor } from "./styles";
import LayoutContext from "../../context/themeContext";

const Navbar = () => {
  const { toggleTheme, theme, width } = useContext(LayoutContext);
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <List>
          <li>
            <h1>
              <span>GC</span>
              <br />
              Rodrigues
            </h1>
          </li>
          <li data-for="home" data-tip>
            <Anchor
              exact
              to="/"
              activeStyle={{
                color: colors.secundary,
                backgroundColor: colors.background,
              }}
            >
              <FaHome size={30} />
            </Anchor>
          </li>
          <ReactTooltip
            id="home"
            place={width <= 770 ? "bottom" : "right"}
            border={true}
            textColor={colors.text}
            borderColor={colors.secundary}
            backgroundColor={colors.background}
            effect="solid"
          >
            <p style={{ fontWeight: 600, fontSize: 14 }}>Home</p>
          </ReactTooltip>
          <li data-for="about" data-tip>
            <Anchor
              to="/about"
              activeStyle={{
                color: colors.secundary,
                backgroundColor: colors.background,
              }}
            >
              <FaFileCode size={30} />
            </Anchor>
          </li>
          <ReactTooltip
            id="about"
            place={width <= 770 ? "bottom" : "right"}
            effect="solid"
            border={true}
            textColor={colors.text}
            borderColor={colors.secundary}
            backgroundColor={colors.background}
          >
            <p style={{ fontWeight: 600, fontSize: 14 }}>About</p>
          </ReactTooltip>
          <li data-for="portfolio" data-tip>
            <Anchor
              to="/portfolio"
              activeStyle={{
                color: colors.secundary,
                backgroundColor: colors.background,
              }}
            >
              <MdFolderSpecial size={30} />
            </Anchor>
          </li>
          <ReactTooltip
            id="portfolio"
            place={width <= 770 ? "bottom" : "right"}
            effect="solid"
            border={true}
            textColor={colors.text}
            borderColor={colors.secundary}
            backgroundColor={colors.background}
          >
            <p style={{ fontWeight: 600, fontSize: 14 }}>Portfolio</p>
          </ReactTooltip>
          <li data-for="contact" data-tip>
            <Anchor
              to="/contact"
              activeStyle={{
                color: colors.secundary,
                backgroundColor: colors.background,
              }}
            >
              <MdChat size={30} />
            </Anchor>
          </li>
          <ReactTooltip
            id="contact"
            place={width <= 770 ? "bottom" : "right"}
            effect="solid"
            border={true}
            textColor={colors.text}
            borderColor={colors.secundary}
            backgroundColor={colors.background}
          >
            <p style={{ fontWeight: 600, fontSize: 14 }}>Contact</p>
          </ReactTooltip>
          <li onClick={toggleTheme}>
            {theme.title === "dark" ? (
              <FaCloudMoon size={30} />
            ) : (
              <FaSun size={30} />
            )}
          </li>
        </List>
      </Container>
    </>
  );
};

export default Navbar;
