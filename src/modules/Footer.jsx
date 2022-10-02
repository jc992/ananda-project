import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Wrapper = styled.div`
  background-color: #dbdbdb;
`;

const IconWrapper = styled.div`
  color: #000;
  & > svg {
    cursor: pointer;
    transition: 0.4s ease-in-out;
    &: not(: last-child) {
      margin-right: 1rem;
    }
    &:hover {
      transform: rotate(-25deg) scale(1.5);
    }
  }
`;

const P = styled.p`
  color: #000;
  font-family: 'Cinzel';
  font-size: 18px;
  font-weight: normal;
`;

export const Footer = () => (
  <Wrapper>
    <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <P>Copyright © 2022 ffmcgee.</P>
      <IconWrapper>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </IconWrapper>
    </Container>
  </Wrapper>
);
