//TODO: Figure out how to put media queries in here, as to not need important use!
const commonSettings = {
  direction: "ltr",
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "white",
        },
        notchedOutline: {
          border: `1px solid gray`,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "5rem !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "primary" && {
              backgroundColor: "transparent",
              border: `1px solid #000`,
              color: "#000",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
              },
              "&:focus": {
                outline: "none",
              },
            }),
        }),
      },
    },
  },
};

export default commonSettings;
