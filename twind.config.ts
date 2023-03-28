import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  preflight: (preflight, { theme }) => ({
    ...preflight,
    body: {
      fontFamily: "'Open Sans', sans-serif",
      backgroundColor: theme("colors.gray.100"),
    },
  }),
  theme: {
    boxShadow: {
      "inset-25": "inset 0px -6px 10px rgba(0, 0, 0, 0.25)",
      "25": "0px 6px 10px rgba(0, 0, 0, 0.25)",
    },
    colors: {
      green: {
        100: "#91B6A2",
        500: "#56876D",
        900: "#19381F",
      },
      eggplant: {
        100: "#B08FA0",
        500: "#6F5060",
        900: "#51344D",
      },
      gray: {
        100: "#FFFEF9",
        900: "#242529",
      },
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontSize: {
        24: "1.5rem",
        32: "2rem",
        36: "2.25rem",
      },
      spacing: {
        16: "1rem",
        32: "2rem",
        38: "2.375rem",
        124: "7.75rem",
      },
    },
  },
} as Options;
