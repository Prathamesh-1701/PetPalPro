import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#4CAF50",
    300: "#4CAF50",
    400: "#4CAF50",
    500: "#333", // the button
    600: "#E39FF6",
    700: "#AC2CC4" , // the name links in the navbar
    800: "#E39FF6",
    900: "#E39FF6"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;