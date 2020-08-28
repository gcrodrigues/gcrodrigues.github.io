import styled from "styled-components";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,

    scale: 0.8,
  },
  in: {
    opacity: 1,

    scale: 1,
  },
  out: {
    opacity: 0,

    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

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

export const Section = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "in",
  exit: "out",
  variants: pageVariants,
  transition: pageTransition,
}))`
  width: calc(100% - 8rem);
  height: 100%;
  @media (max-width: 770px) {
    width: 100%;
    height: calc(100% - 8rem);
  }
`;
