import styled from 'styled-components';
import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import heroImage from '../images/MainHero.jpeg';

const Wrapper = styled.div`
  background: url(${heroImage});
  background-size: cover;
  min-height: 80vh;
`;

export const MainHero = () => (
  <Wrapper>
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <HomeIcon sx={{ cursor: 'pointer', fontSize: 40, color: '#fff' }} />
        </Grid>
        <Grid align="end" item sm={6}>
          <Typography variant="h6" color="white" sx={{ cursor: 'pointer' }}>
            Get Early Access
          </Typography>
        </Grid>
        <Grid item sm={8}>
          <Typography variant="h1" color="white" sx={{ margin: '2rem 0' }}>
            A New Way To Start Business
          </Typography>
        </Grid>
        <Grid item sm={8}>
          <Typography paragraph color="white">
            Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico mentitum duo. Illum iusto laoreet his te.
            Lorem partiendo mel ex. Ad vitae admodum voluptatum per.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  </Wrapper>
);
