import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  margin: 5rem;
  padding: 1.5rem;
`;

const TextContainer = styled.div`
  font-family: 'Cinzel';
  font-size: 36px;
  color: #000;
`;

const H2 = styled.h2`
  font-weight: normal;
  font-size: 36px;
  color: #000;
`;

const P = styled.p`
  line-height: normal;
`;

export const Mission = () => {
  return (
    <Wrapper>
      <TextContainer>
        <H2>Our Mission</H2>
        <P>
          Lorem ipsum dolor sit amet porro his no his deleniti Ne error antiopam usu. Sed vocen concludaturque ea Et usu
          ocurreret elaboraret doctus prodesse assueverit.
        </P>
      </TextContainer>
    </Wrapper>
  );
};
