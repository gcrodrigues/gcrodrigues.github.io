import { lighten, darken } from "polished";

export default {
  title: "light",
  colors: {
    primary: "#f7b733",
    secundary: "#f25c27",

    background: "#fafafa",
    complement: "#fff",

    navbar: `${lighten(0.1, "#fc4a1a")}`,

    inputBorder: darken(0.03, "#f0f0fe"),

    icons: "#f1f1f1",

    text: "#222",
  },
};
