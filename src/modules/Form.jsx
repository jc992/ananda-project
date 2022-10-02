import styled from 'styled-components';
import { Grid, TextareaAutosize, TextField } from '@mui/material';
import { Container } from '@mui/system';

const Wrapper = styled.div`
  background-color: #eaeaea;
`;

const H2 = styled.h2`
  color: #000;
  font-family: 'Cinzel';
  font-size: 36px;
  font-weight: normal;
`;

const P = styled.p`
  color: #000;
  font-family: 'Cinzel';
  font-size: 18px;
  font-weight: normal;
`;

export const Form = () => (
  <Wrapper>
    <Container>
      <Grid container spacing={1}>
        <Grid item md={6} sx={{ color: 'white' }}>
          <H2>Contact Us</H2>
          <P>Te iisque labitur eos, nec sale argumentum scribentur, augue in vim. Erat fugit sit at, ius lorem.</P>
          <P>Email : person@company.com</P>
          <P>Phone : 361-688-5824</P>
          <P>Address : 4826 White Avenue, Corpus Christi, Texas</P>
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <TextField label="Your Name" sx={{ width: '100%' }} />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField label="Your Email" sx={{ width: '100%' }} />
            </Grid>
            <Grid item sm={12} md={12}>
              {/* TODO: Ver no op-backoffice o que fiz para estilizar este component */}
              <TextareaAutosize minRows={12} style={{ backgroundColor: 'inherit', width: '99%' }}></TextareaAutosize>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Wrapper>
);
