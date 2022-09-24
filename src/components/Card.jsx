import styled from 'styled-components';
import { Button, Paper, Typography } from '@mui/material';
import { isElementPair } from '../utils/functions';
import { backgroundColor } from '../themes/colors';

const Price = styled.span`
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 1.1;
`;

export const Card = ({ title, price, position }) => (
  <Paper
    sx={{
      height: '275px',
      padding: '3rem .5rem',
      backgroundColor: `${isElementPair(position) ? backgroundColor : 'transparent'}`,
      color: `${isElementPair(position) ? 'white' : 'black'}`,
    }}
  >
    <Typography>{title}</Typography>
    <Typography>
      € <Price>{price}</Price>/ MO.
    </Typography>
    <Typography>Lorem ipsum dolor sit amet porro</Typography>
    <Typography>Ne error antiopam usu</Typography>
    <Typography>Et usu ocurreret elaboraret</Typography>
    <Button
      variant="contained"
      color="primary"
      sx={{ marginTop: '2rem', backgroundColor: `${isElementPair(position) ? 'black' : ''}` }}
    >
      Buy
    </Button>
  </Paper>
);
