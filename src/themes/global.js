//TODO: Figure out how to put media queries in here, as to not need important use!
const commonSettings = {
  direction: 'ltr',
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'black',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'white',
        },
        notchedOutline: {
          border: `1px solid gray`,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '5rem !important',
        },
      },
    },
  },
};

export default commonSettings;
