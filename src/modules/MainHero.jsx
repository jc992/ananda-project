import styled from "styled-components";
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import heroImage from "../images/Lotus_2.jpeg";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  opacity: ${({ opacity }) => opacity};
  background: url(${heroImage});
  background-size: cover;
  min-height: 80vh;
`;

export const MainHero = () => {
  const [opacity, setOpacity] = useState(1);

  const opacityOnScroll = () => {
    const baseline = 1000;
    const opacity = baseline - window.scrollY * 1.7;
    if (opacity < 0) return;
    !window ? setOpacity(1) : setOpacity(opacity / baseline);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => opacityOnScroll());
    return () =>
      document.removeEventListener("scroll", () => opacityOnScroll());
  }, []);

  return (
    <Wrapper opacity={opacity}>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={8}>
            <Typography variant="h2" color="white" sx={{ margin: "2rem 0" }}>
              Ananda Project
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Button variant="outlined" color="secondary">
              {/* TODO make white color for button */}
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};
