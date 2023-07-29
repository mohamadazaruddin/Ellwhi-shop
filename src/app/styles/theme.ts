import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import shadows from "./foundations/shadows";
import textStyles from "./foundations/textStyles";
import styles from "./style";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Gotham sans-serif",
    body: "Gotham sans-serif",
    mono: "Red Hat Mono",
  },
  shadows,
  //set the global lineHeight as per TFO design system
  lineHeights: {
    base: 1.2,
    sm: "14px",
  },
  border: {
    defaultBorder: "1px solid #4d4d4d",
  },
  colors,
  accordianStyles: {
    borderTopStartRadius16: "16px",
    borderBottomStartRadius16: "16px",
    borderStart8: "8px",
  },
  styles,
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  textStyles,
  components: {
    Radio: {
      variants: {
        primary: ({ colorScheme = "primary" }) => ({
          color: `${colorScheme}.500`,

          control: {
            _checked: {
              color: "secondary.500",
            },
          },
        }),
      },
      defaultProps: {
        variant: "primary",
        colorScheme: "primary",
      },
    },
  },
});

export default theme;
