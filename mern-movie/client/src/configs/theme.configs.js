import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#737CCF",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#2218A7",
        contrastText: "#ffffff"
      },
      background: {
        default: "#BBC4EB",
        paper: "#090909"
      }
    } : {
      primary: {
        main: "#737CCF",
        contrastText:"#000000"
      },
      secondary: {
        main: "#f44336"
      },
      background: {
        default: "#BBC4EB",
        // default: colors.grey["100"],
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true }
        }
      }
    });
  }
};

export default themeConfigs;