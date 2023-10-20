import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import bgImage from "../../images/oilRunneht1.jpg";

const Banner = () => {
  return (
    <Stack
      width="100%"
      height={400}
      position="relative"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      borderRadius={5}
    >
      <Stack
        width="100%"
        position="absolute"
        bottom={30}
        justifyContent="center"
        alignItems="center"
        paddingX={15}
        paddingY={2}
      >
        <Typography
          fontWeight="bolder"
          fontSize={40}
          letterSpacing={2}
          textAlign="center"
          color="white"
        >
          We have a team of experienced therapists, book a service and we’ll
          deliver a five star service
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" sx={{ width: 250 }}>
            Become A Therapist
          </Button>
          <Button variant="contained" sx={{ width: 250 }} color="secondary">
            Book A Therapist
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Banner;
