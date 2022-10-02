import styled from 'styled-components';
import { Container } from '@mui/system';
import { Facebook, LinkedIn, Instagram, Twitter } from '@mui/icons-material';

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
        <Facebook />
        <Instagram />
        <Twitter />
        <LinkedIn />
      </IconWrapper>
    </Container>
  </Wrapper>
);
