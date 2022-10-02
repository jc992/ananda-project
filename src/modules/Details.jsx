import styled from 'styled-components';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { detailsItems } from '../utils/items';
import { backgroundColor } from '../themes/colors';
import { useIsMobileDevice } from '../hooks/useIsMobileDevice';

const Wrapper = styled.div`
  & > div {
    padding: 5rem;
  }
  & > div:first-child {
    background: linear-gradient(175deg, #f2f1ed 55%, ${backgroundColor} 0);
  }
  & > div:nth-child(2) {
    background: ${backgroundColor};
  }
`;

const Image = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}rem` : '0')};
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  transition: ease-in-out 0.3s;
  z-index: 2;

  &:before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: inherit;
    background-position: bottom;
    filter: blur(40px) saturate(0%);
    transform: scaleX(0.4);
    transition: ease-in-out 0.4s;
    border-radius: 120px;
    transform-origin: right;
    opacity: 0;
    z-index: -1;
  }

  &:hover {
    border-radius: 0;
    margin-left: 5rem;
    width: 450px;
    height: 310px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1),
      0px 24px 32px rgba(9, 55, 53, 0.14);

    &:before {
      width: 100%;
      opacity: 0.18;
      filter: blur(10px) saturate(100%);
    }
  }
`;

const TextContainer = styled.div`
  font-family: 'Cinzel';
  font-size: 36px;
  font-weight: normal;
  color: #000;
`;

const H3 = styled.h3`
  font-size: 2.5rem;
  padding-bottom: 2rem;
  line-height: normal;
`;

const P = styled.p`
  font-size: 1rem;
  padding-bottom: 2rem;
`;

export const Details = () => {
  const isMobileDevice = useIsMobileDevice()
  return (
  <Wrapper>
    {detailsItems.map(
      ({ duration, textAos, title, description, button, image, imageAos, isImageFirst, marginLeft }, i) => {
        const renderText = () => (
          <Grid
            data-aos={textAos}
            data-aos-duration={duration}
            item
            md={6}
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <TextContainer>
              <H3>{title}</H3>
              <P>{description}</P>
            </TextContainer>
            <Button variant="outlined" color="primary">
              {button}
            </Button>
          </Grid>
        );
        const renderImage = () => (
          <Grid data-aos={imageAos} data-aos-duration={duration} item md={6}>
            <Image src={image} marginLeft={!isMobileDevice && marginLeft} />
          </Grid>
        );
        return (
          <Box key={i}>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              {isImageFirst || isMobileDevice ? (
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
      },
    )}
  </Wrapper>
  )

};
