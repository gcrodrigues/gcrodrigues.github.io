import React, { useContext } from "react";
import { MdFolderSpecial, MdChat } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFileCode, FaHome, FaCloudMoon, FaSun } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { ThemeContext } from "styled-components";
import { Container, Nav, Anchor } from "./styles";
import LayoutContext from "../../context/themeContext";

const Navbar = () => {
  const { handleNavbar, toggleTheme, theme, width, navIsOpen } = useContext(
    LayoutContext
  );
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Container isOpen={navIsOpen}>
        <button onClick={handleNavbar}>
          {navIsOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        <h1>
          <span>GC</span>
          <br />
          Rodrigues
        </h1>
        <div>
          <Nav>
            <Anchor
              onClick={handleNavbar}
              data-for="home"
              data-tip
              exact
              to="/"
              activeStyle={
                width > 770
                  ? {
                      color: colors.secundary,
                      backgroundColor: colors.background,
                    }
                  : { backgroundColor: colors.active }
              }
            >
              {width >= 770 ? <FaHome size={30} /> : <p>Home</p>}
            </Anchor>

            {width > 770 && (
              <ReactTooltip
                id="home"
                place="right"
                border={true}
                textColor={colors.text}
                borderColor={colors.secundary}
                backgroundColor={colors.background}
                effect="solid"
              >
                <p style={{ fontWeight: 600, fontSize: 14 }}>Home</p>
              </ReactTooltip>
            )}

            <Anchor
              onClick={handleNavbar}
              data-for="about"
              data-tip
              to="/about"
              activeStyle={
                width > 770
                  ? {
                      color: colors.secundary,
                      backgroundColor: colors.background,
                    }
                  : { backgroundColor: colors.active }
              }
            >
              {width >= 770 ? <FaFileCode size={30} /> : <p>About</p>}
            </Anchor>

            {width > 770 && (
              <ReactTooltip
                id="about"
                place="right"
                effect="solid"
                border={true}
                textColor={colors.text}
                borderColor={colors.secundary}
                backgroundColor={colors.background}
              >
                <p style={{ fontWeight: 600, fontSize: 14 }}>About</p>
              </ReactTooltip>
            )}

            <Anchor
              onClick={handleNavbar}
              data-for="portfolio"
              data-tip
              to="/portfolio"
              activeStyle={
                width > 770
                  ? {
                      color: colors.secundary,
                      backgroundColor: colors.background,
                    }
                  : { backgroundColor: colors.active }
              }
            >
              {width >= 770 ? <MdFolderSpecial size={30} /> : <p>Portfolio</p>}
            </Anchor>

            {width > 770 && (
              <ReactTooltip
                id="portfolio"
                place="right"
                effect="solid"
                border={true}
                textColor={colors.text}
                borderColor={colors.secundary}
                backgroundColor={colors.background}
              >
                <p style={{ fontWeight: 600, fontSize: 14 }}>Portfolio</p>
              </ReactTooltip>
            )}

            <Anchor
              onClick={handleNavbar}
              data-for="contact"
              data-tip
              to="/contact"
              activeStyle={
                width > 770
                  ? {
                      color: colors.secundary,
                      backgroundColor: colors.background,
                    }
                  : { backgroundColor: colors.active }
              }
            >
              {width >= 770 ? <MdChat size={30} /> : <p>Contact</p>}
            </Anchor>

            {width > 770 && (
              <ReactTooltip
                id="contact"
                place="right"
                effect="solid"
                border={true}
                textColor={colors.text}
                borderColor={colors.secundary}
                backgroundColor={colors.background}
              >
                <p style={{ fontWeight: 600, fontSize: 14 }}>Contact</p>
              </ReactTooltip>
            )}
          </Nav>
        </div>

        <button onClick={toggleTheme}>
          {theme.title === "dark" ? (
            <FaSun size={30} />
          ) : (
            <FaCloudMoon size={30} />
          )}
        </button>
      </Container>
    </>
  );
};

export default Navbar;
