import styled from 'styled-components';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { clients } from '../utils/items';

const Wrapper = styled.div`
  background-color: #eceeef;
`;

const Image = styled.img`
  height: 75%;
  width: 75%;
`;


export const Clients = () => (
  <Wrapper>
    <Container>
      <Grid container spacing={2}>
        {clients.map((src, i) => (
          <Grid key={i} item sm={4} md={2}>
            <Image src={src} alt="" />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Wrapper>
);
