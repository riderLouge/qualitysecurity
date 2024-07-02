import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import pic from "../../src/asset/updatedR-removebg-preview.png";
import styled from "styled-components";

const stats = [
  { id: 1, name: "Years of Experience", value: "10+" },
  { id: 2, name: "Clients Served", value: "500" },
  { id: 3, name: "Security Personnel", value: "200+" },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const ImageContainer = styled.div`
  width: 80%;
  max-width: 100%;
  margin-top: 2rem;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const StatsSection = () => {
  return (
    <Box className="bg-white py-24 sm:py-32">
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          className="text-5xl font-bold"
          sx={{ textAlign: "center" }}
        >
          Our Achievements
        </Typography>
        <Typography
          paragraph
          sx={{
            marginTop: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
            lineHeight: "1.6",
            width: "80%",
          }}
        >
          <span style={{ fontWeight: "bold" }}>We take pride</span> in our achievements and the value we bring to our clients. With over{" "}
          <span style={{ fontWeight: "bold" }}>10 years of experience</span> under the leadership of our owner,{" "}
          <span style={{ fontWeight: "bold" }}>B. Ravi</span>, we have successfully served more than{" "}
          <span style={{ fontWeight: "bold" }}>500 clients</span>, providing top-notch security solutions. Our dedicated team of{" "}
          <span style={{ fontWeight: "bold" }}>200+ security personnel</span> is committed to ensuring the safety and well-being of our clients and their assets.
        </Typography>
        <Grid container spacing={8} sx={{ justifyContent: "center" }}>
          {stats.map((stat) => (
            <Grid item xs={3} sm={4} key={stat.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {stat.name}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="text.primary"
                  textAlign="center"
                >
                  {stat.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <ImageContainer>
          <Image src={pic} alt="Services" />
        </ImageContainer>
      </Container>
    </Box>
  );
};

export default StatsSection;
