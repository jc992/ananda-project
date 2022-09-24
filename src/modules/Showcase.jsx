import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { showcaseItems } from '../utils/items';

export const Showcase = () => (
    <Container>
    <Grid container spacing={2}>
      <Grid item sm={12} align="center" sx={{ marginBottom: '4rem' }}>
        <Typography variant="h3">Smartest protection for your site</Typography>
      </Grid>
      {showcaseItems.map(({ description, delay, item, title }, i) => (
        <Grid key={i} data-aos="fade-up" data-aos-delay={delay} data-aos-duration="1000" item sm={4} align="center">
          {item}
          <Typography variant="body1">{title}</Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </Grid>
      ))}
    </Grid>
  </Container>
);
