import styled from 'styled-components';
import { Button, Paper } from '@mui/material';
import { isElementPair } from '../utils/functions';
import { backgroundColor } from '../themes/colors';

const Price = styled.span`
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 1.1;
`;

const P = styled.p`
  color: #000;
  font-family: 'Cinzel';
  font-size: 12px;
  font-weight: normal;
`;

export const Card = ({ title, price, position }) => (
  <Paper
    sx={{
      height: '315px',
      padding: '3rem .5rem',
      backgroundColor: `${isElementPair(position) ? `${backgroundColor}` : 'rgba(186, 178, 173, .2)' }`,
    }}
  >
  {/* //TODO(joaot): mexer aquela cor para uma var constant. */}
    <P>{title}</P>
    <P>
      € <Price>{price}</Price>/ MO.
    </P>
    <P>Lorem ipsum dolor sit amet porro</P>
    <P>Ne error antiopam usu</P>
    <P>Et usu ocurreret elaboraret</P>
    <Button
      variant="outlined"
      color="primary"
      sx={{ marginTop: '2rem', backgroundColor: '#000', color: '#fff' }}
    >
      Buy
    </Button>
  </Paper>
);
