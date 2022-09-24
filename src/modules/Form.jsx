import styled from 'styled-components';
import { Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';

const Wrapper = styled.div`
  background-color: #383838;
`;

export const Form = () => (
  <Wrapper>
    <Container>
      <Grid container spacing={1}>
        <Grid item md={6} sx={{ color: 'white' }}>
          <Typography variant="h2" sx={{ paddingBottom: '1.5rem' }}>
            Contact Us
          </Typography>
          <Typography sx={{ paddingBottom: '1.5rem' }}>
            Te iisque labitur eos, nec sale argumentum scribentur, augue in vim. Erat fugit sit at, ius lorem.
          </Typography>
          <Typography>Email : company_email@com</Typography>
          <Typography>Phone : 361-688-5824</Typography>
          <Typography>Address : 4826 White Avenue, Corpus Christi, Texas</Typography>
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <TextField label="Your Name" />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField label="Your Email" sx={{ width: '100%' }} />
            </Grid>
            <Grid item sm={12} md={12} sx={{ marginTop: '2rem' }}>
              {/* TODO: Ver no op-backoffice o que fiz para estilizar este component */}
              <TextareaAutosize minRows={8} style={{ backgroundColor: 'inherit', width: '100%' }}></TextareaAutosize>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Wrapper>
);
