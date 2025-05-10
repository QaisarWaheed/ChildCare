import {
  createTheme,
  type MantineTheme,
  type ButtonProps,
} from "@mantine/core";

const borderColor = "#0F1626";

const mantineTheme = createTheme({
  components: {
    TableThead: {
      defaultProps: {
        style: {
          borderColor: "red",
          borderRadius: "4px",
        },
      },
    },
    TableTr: {
      defaultProps: {
        styles: {
          tr: {
            borderColor,
          },
        },
      },
    },
    TextInput: {
      styles: (_theme: MantineTheme, params: ButtonProps) => ({
        root: {
          ...(params.variant === "outline" && {
            border: `1px solid ${borderColor}`,
            borderRadius: "4px",
            paddingLeft: "4px",
            paddingRight: "4px",
          }),
        },
      }),
    },
    Select: {
      styles: (_theme: MantineTheme, params: ButtonProps) => ({
        root: {
          ...(params.variant === "outline" && {
            border: `1px solid ${borderColor}`,
            borderRadius: "4px",
            paddingLeft: "4px",
            paddingRight: "4px",
          }),
        },
      }),
    },
    Button: {
      styles: (_theme: MantineTheme, params: ButtonProps) => ({
        root: {
          ...(params.variant === "outline" && {
            borderColor,
          }),
        },
      }),
    },
    Card: {
      defaultProps: {
        p: "xl",
        withBorder: true,
        style: {
          backgroundColor: "transparent",
          borderColor,
        },
      },
    },
    AppShellHeader: {
      defaultProps: {
        style: {
          borderColor,
        },
      },
    },
    Divider: {
      defaultProps: {
        color: borderColor,
      },
    },
  },
});

export default mantineTheme;
