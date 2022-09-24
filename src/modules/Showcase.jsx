import styled from 'styled-components';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import { showcaseItems } from '../utils/items';

const TextContainer = styled.div`
  font-family: 'Cinzel';
  font-size: 36px;
  font-weight: normal;
  color: #000;
`;

const H3 = styled.h3`
  font-size: 36px;
`;

const H6 = styled.h6`
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0;
`;

const P = styled.p`
  font-size: 1rem;
`;

export const Showcase = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid data-aos="fade-left" data-aos-duration="1000" item sm={12} align="center" sx={{ marginBottom: '4rem' }}>
        <TextContainer>
          <H3>Our Vision</H3>
        </TextContainer>
      </Grid>
      {showcaseItems.map(({ description, delay, item, title }, i) => (
        <Grid key={i} data-aos="fade-up" data-aos-delay={delay} data-aos-duration="1000" item sm={4} align="center">
          {item}
          <TextContainer>
            <P>{title}</P>
            <H6>{description}</H6>
          </TextContainer>
        </Grid>
      ))}
    </Grid>
  </Container>
);
