import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import Copyright from "../Copyright/Copyright";
import { signUpValidations } from "../../yupValidations";
import { useState } from "react";
import { UserRegister } from "../../services/user.services";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const theme = createTheme();

export default function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userRole: "",
    },
    validationSchema: signUpValidations,
    onSubmit: (values) => {
      swal(JSON.stringify(values, null, 4));
      // alert(JSON.stringify(values, null, 4));
    },
  });

  // manage the state
  const [user, setUser] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "userRole": ""
  })
  const navigate= useNavigate();

  // handle inputs
  const handleTextInput = (event) => {
      event.preventDefault();
      const elename = event.target.name;
      setUser({ ...user, [elename]: event.target.value })
  }

  // handle submit
  const adduser = (event) => {
      event.preventDefault();
      UserRegister(user).then((data) => {
          // alert("sucess");
          swal("Thank you for registering","Registration successfull","success");
          navigate('/login')

      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={adduser} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleTextInput}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleTextInput}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleTextInput}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleTextInput}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" id="userRole" name="userRole"
                    label="userRole" autoComplete="userRole" 
                    onChange={handleTextInput}
                    error={formik.touched.userRole && Boolean(formik.errors.userRole)}>
                        <FormControlLabel value="user" name="userRole" control={<Radio />} label="user" />
                        <FormControlLabel value="admin" name="userRole" control={<Radio />} label="admin" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
