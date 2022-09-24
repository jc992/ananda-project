import styled from 'styled-components';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { detailsItems } from '../utils/items';
import { backgroundColor } from '../themes/colors';

const Wrapper = styled.div`
  & > div {
    padding: 5rem;
  }
  & > div:first-child {
    background: linear-gradient(175deg, #ffffff 55%, ${backgroundColor} 0);
  }
  & > div:nth-child(2) {
    background: ${backgroundColor};
  }
`;

const Image = styled.img`
  ${'' /* TODO: Responsive width on smaller viewport, 100vw */}
  width: 40vw;
`;

export const Details = () => (
  <Wrapper>
    {detailsItems.map(({ duration, textAos, title, description, button, image, imageAos, isImageFirst }, i) => {
      const renderText = () => (
        <Grid
          data-aos={textAos}
          data-aos-duration={duration}
          item
          sm={6}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Typography variant="h3" sx={{ paddingBottom: '2rem' }}>
            {title}
          </Typography>
          <Typography paragraph sx={{ paddingBottom: '2rem' }}>
            {description}
          </Typography>
          <Button variant="contained" color="success" sx={{ width: '50%', backgroundColor: 'gray' }}>
            {button}
          </Button>
        </Grid>
      );
      const renderImage = () => (
        <Grid data-aos={imageAos} data-aos-duration={duration} item sm={6}>
          <Image width={100} src={image} alt={`image-${i}`} loading="lazy"></Image>
        </Grid>
      );
      return (
        <Box key={i}>
          <Grid container spacing={2}>
            {isImageFirst ? (
              <>
                {renderImage()}
                {renderText()}
              </>
            ) : (
              <>
                {renderText()}
                {renderImage()}
              </>
            )}
          </Grid>
        </Box>
      );
    })}
  </Wrapper>
);
