import React, { useState } from "react";
import loginLogo from "../../images/hot stone mass.jpg";
import logo from "../../images/logo.png";
import {
  Box,
  Button,
  Divider,
  Grid,
  InputLabel,
  Stack,
  Typography
} from "@mui/material";
import googleLogo from "../../images/google-icon.png";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextFieldWrapper from "../../components/FormComponents/TextFieldWrapper";
import { useNavigate } from "react-router-dom";

const LoginWithOTP = () => {
  const navigate = useNavigate();
  const [otp, setOpt] = useState();

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
              Login to your Account
            </Typography>
            <Typography fontWeight="lighter" letterSpacing={1}>
              See what is going on with your business
            </Typography>
          </Stack>
          <Stack width="100%">
            <Formik
              initialValues={{
                email: "",
                otpCode: ""
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().required(
                  "Please enter your email or phone number"
                ),
                otpCode: otp && Yup.string().required("OTP code required")
              })}
              onSubmit={(values) => {
                if (values.otpCode.length > 0) {
                  // try to login user
                } else {
                  // request for user OTP and set it
                  setTimeout(() => {
                    setOpt("Something Here");
                  }, 3000);
                }
              }}
            >
              {({ formik }) => {
                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>
                          Phone Number or Email Address
                        </InputLabel>
                        <TextFieldWrapper
                          name="email"
                          label="Email/Phone Number"
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>Password</InputLabel>
                        <Stack direction="row">
                          <TextFieldWrapper
                            name="otpCode"
                            label="Enter OTP Code"
                            sx={{
                              width: "80%"
                            }}
                            InputProps={{
                              sx: {
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                              }
                            }}
                          />
                          <Button
                            variant="outlined"
                            sx={{
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                              width: "20%",
                              height: 53
                            }}
                            type="submit"
                          >
                            Get OTP
                          </Button>
                        </Stack>
                        <Typography
                          sx={{
                            color: "primary.main",
                            fontWeight: 700,
                            mt: 1,
                            cursor: "pointer"
                          }}
                          onClick={() => navigate("/loginWithPassword")}
                        >
                          Login with password
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={12}>
                        {otp && (
                          <Button
                            variant="contained"
                            sx={{ width: "100%" }}
                            type="submit"
                          >
                            Login
                          </Button>
                        )}
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Stack direction="row" spacing={1}>
                          <Typography
                            sx={{ color: "primary.main", cursor: "pointer" }}
                            onClick={() => navigate("/registerUser")}
                          >
                            Register
                          </Typography>
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                              fontWeight: "bolder",
                              border: 1,
                              color: "primary.main"
                            }}
                          />
                          <Typography
                            sx={{ color: "primary.main", cursor: "pointer" }}
                          >
                            Forgot Password
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

export default LoginWithOTP;
