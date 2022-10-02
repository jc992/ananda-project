import styled from 'styled-components';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { pricingItems } from '../utils/items';
import { Card } from '../components/Card';

const H3 = styled.h3`
  color: #000;
  font-family: 'Cinzel';
  font-size: 36px;
  font-weight: normal;
`;

export const Pricing = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid item sm={12} align="center" sx={{ marginBottom: '2rem' }}>
        <H3 variant="h3">Check our pricings</H3>
      </Grid>
      {pricingItems.map(({ title, price, aos }, i) => (
        <Grid key={i} data-aos={aos} data-aos-duration="1000" item sm={12} md={4} align="center">
          <Card title={title} price={price} position={i}/>
        </Grid>
      ))}
    </Grid>
  </Container>
);
