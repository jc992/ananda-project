//TODO: Figure out how to put media queries in here, as to not need important use!
const commonSettings = {
  direction: 'ltr',
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'black',
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
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'primary' && {
              backgroundColor: 'transparent',
              border: `1px solid #000`,
              color: '#000',
              '&:hover': {
                backgroundColor: '#000',
                color: '#fff',
                border: '1px solid transparent',
              },
              '&:focus': {
                outline: 'none',
              },
            }),
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            color: '#000',
          }),
        }),
      },
    },
  },
};

export default commonSettings;
