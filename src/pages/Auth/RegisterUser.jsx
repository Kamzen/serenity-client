import React from "react";
import loginLogo from "../../images/hot stone mass.jpg";
import logo from "../../images/logo.png";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  Stack,
  Typography
} from "@mui/material";
import googleLogo from "../../images/google-icon.png";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextFieldWrapper from "../../components/FormComponents/TextFieldWrapper";
import SelectFieldWrapper from "../../components/FormComponents/SelectFieldWrapper";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();
  const areas = [
    {
      value: "Area 1",
      label: "Area 1"
    },
    {
      value: "Area 2",
      label: "Area 2"
    },
    {
      value: "Area 3",
      label: "Area 3"
    },
    {
      value: "Area 4",
      label: "Area 4"
    },
    {
      value: "Area 5",
      label: "Area 5"
    }
  ];

  return (
    <Stack
      direction="row"
      height="100vh"
      width="100vw"
      sx={{ overflow: "hidden" }}
    >
      <Box width="50%" height="100%">
        <img src={loginLogo} alt="Logo" width="100%" height="100%" />
      </Box>
      <Stack width="50%" height="100%" sx={{ overflowY: "auto" }}>
        <Stack
          width="70%"
          m="auto"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <img src={logo} alt="Logo" width={"70%"} height={120} />
          <Button
            variant="outlined"
            sx={{ width: "100%" }}
            startIcon={<img src={googleLogo} alt="" width={25} height={25} />}
          >
            Continue With Google
          </Button>
          <Stack>
            <Typography fontWeight={450} fontSize={25} letterSpacing={1}>
              Create an account
            </Typography>
            <Typography fontWeight="lighter" letterSpacing={1}>
              Create an account and book your preferred Therapist
            </Typography>
          </Stack>
          <Stack width="100%">
            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().required(
                  "Please enter your email or phone number"
                ),
                password: Yup.string().required("Password required")
              })}
              onSubmit={(values) => {}}
            >
              {() => {
                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>Area</InputLabel>
                        <SelectFieldWrapper
                          name="area"
                          label="Select your city/area"
                          options={areas}
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>FullName</InputLabel>
                        <TextFieldWrapper name="fullName" label="FullName" />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>Address</InputLabel>
                        <TextFieldWrapper
                          name="address"
                          label="Residential Address"
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>Email Address</InputLabel>
                        <TextFieldWrapper name="email" label="Email Address" />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>Phone Number</InputLabel>
                        <TextFieldWrapper
                          name="phoneNumber"
                          label="Phone Number"
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <Button variant="contained" sx={{ width: "100%" }}>
                          Register
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Stack direction="row" spacing={1}>
                          <Typography>Already Have An Account?</Typography>
                          {/* <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                              fontWeight: "bolder",
                              border: 1,
                              color: "primary.main"
                            }}
                          /> */}
                          <Typography
                            sx={{ color: "primary.main", cursor: "pointer" }}
                            onClick={() => navigate("/loginWithPassword")}
                          >
                            Login
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RegisterUser;
