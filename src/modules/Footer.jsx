import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Wrapper = styled.div`
  background-color: #4c4c4c;
`;

const IconWrapper = styled.div`
  color: white;
  & > svg {
    cursor: pointer;
    &: not(: last-child) {
      margin-right: 1rem;
    }
  }
`;

export const Footer = () => (
  <Wrapper>
    <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography paragraph color="white">
        Copyright © 2022 ffmcgee.
      </Typography>
      <IconWrapper>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </IconWrapper>
    </Container>
  </Wrapper>
);
