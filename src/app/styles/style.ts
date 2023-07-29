import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

// Global style overrides.
const styles = {
  global: (props: GlobalStyleProps) => {
    return {
      html: {
        height: "100%",
        width: "100%",
        backgroundColor: "#000",
      },
      body: {
        height: "100%",
        width: "100%",
        backgroundColor: "#000",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "100%",
      },
      main: {
        flex: "1 0 auto",
      },
      // Scrollbars.
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        background: "#222222",
        borderRadius: "4px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#333333",
        borderRadius: "4px",
      },
      "::-webkit-scrollbar-corner": {
        background: "transparent",
      },
      // input placeholder style
      "::-webkit-input-placeholder": {
        color: "gray.500",
        overflow: "visible",
      },
    };
  },
};

export default styles;
