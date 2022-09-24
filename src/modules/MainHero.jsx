import styled from 'styled-components';
import { Button, Box } from '@mui/material';
import { useOpacity } from '../hooks/useOpacity';

const imageSource = 'https://images.pexels.com/photos/515631/pexels-photo-515631.jpeg';

const OpacityWrapper = styled.div`
  opacity: ${({ opacity }) => opacity};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  padding-top: 50%;
  margin: 2rem auto;

  & > .block {
    position: absolute;
    height: 100%;
    width: 30%;
    perspective: 1000px;
  }
  & > .block:nth-of-type(1) {
    height: 80%;
    top: 10%;
    left: 17%;
    width: 15%;
  }
  & > .block:nth-of-type(2) {
    top: 0;
    left: 35%;
  }
  & > .block:nth-of-type(3) {
    height: 80%;
    top: 10%;
    left: 64%;
    width: 15%;
  }
  & > .block > .side {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${imageSource});
    background-size: auto 100%;
    box-shadow: -1vw 0.5vw 1vw rgba(0, 0, 0, 0.3);
  }
  & > .block > .side.-main {
    height: 100%;
    width: 100%;
    transform: rotateY(30deg);
    transform-origin: 0 50%;
  }
  & > .block > .side.-left {
    height: 100%;
    width: 20%;
    transform-origin: 0 50%;
    transform: rotateY(-60deg) translateX(-100%);
    filter: brightness(40%);
  }
  & > .block:nth-of-type(1) > .side.-main {
    background-position: 4% 50%;
    background-size: auto 130%;
  }
  & > .block:nth-of-type(1) > .side.-left {
    background-position: 0 50%;
    background-size: auto 130%;
  }
  & > .block:nth-of-type(2) > .side.-main {
    background-position: 50% 0;
  }
  & > .block:nth-of-type(2) > .side.-left {
    background-position: 28.5% 0;
  }
  & > .block:nth-of-type(3) > .side.-main {
    background-position: 96% 50%;
    background-size: auto 130%;
  }
  & > .block:nth-of-type(3) > .side.-left {
    background-position: 78% 50%;
    background-size: auto 130%;
  }
`;

export const MainHero = () => {
  const opacity = useOpacity();

  return (
    <OpacityWrapper opacity={opacity}>
      <ImageContainer>
        <Box className="block">
          <Box className="side -main"></Box>
          <Box className="side -left"></Box>
        </Box>
        <Box className="block">
          <Box className="side -main"></Box>
          <Box className="side -left"></Box>
        </Box>
        <Box className="block">
          <Box className="side -main"></Box>
          <Box className="side -left"></Box>
        </Box>
      </ImageContainer>
      <Button variant="outlined" color="primary">
        Get Started
      </Button>
    </OpacityWrapper>
  );
};
