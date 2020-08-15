import { lighten, darken } from "polished";

export default {
  title: "light",
  colors: {
    primary: "#c24e98",
    secundary: "#7e56cc",

    background: "#f0f0fe",
    complement: "#fff",

    navbar: `${lighten(0.1, "rgba(67, 53, 198, 1)")}`,

    inputBorder: darken(0.03, "#f0f0fe"),

    icons: "#f1f1f1",

    text: "#222",
  },
};
