import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import Copyright from '../Copyright/Copyright';
import { signInValidations } from '../../yupValidations';
import swal from "sweetalert";
import { useNavigate } from 'react-router';
import { UserLogin } from "../../services/user.services";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

const theme = createTheme();

export default function Login() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            userRole: '',
        },
        validationSchema: signInValidations,
        onSubmit: (values) => {
          // alert(JSON.stringify(values, null, 2));
          swal(JSON.stringify(values, null, 2));
          UserLogin(values).then((response) => {
            if (response.data.length === 1) {
                console.log(response.data);
                if(response.data.userRole === 'user') {
                    swal("Sucess")
                    navigate('/userDashboard')
                } else {
                    swal("Sucess")
                    navigate('/adminDashboard')
                }
            }
            else {
                swal("Check mail and password")
            }
          })
          .catch((err) => {
            swal("something went wrong")
         }) 
        },
    });
    
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" id="userRole" name="userRole"
                    label="userRole" autoComplete="userRole" 
                    value={formik.values.userRole}
                    onChange={formik.handleChange}
                    error={formik.touched.userRole && Boolean(formik.errors.userRole)}>
                        <FormControlLabel value="user" name="userRole" control={<Radio />} label="user" />
                        <FormControlLabel value="admin" name="userRole" control={<Radio />} label="admin" />
                    </RadioGroup>
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />}label="Remember me"/>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item xs>
                        <Link href="/forgotPassword" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/register" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        </ThemeProvider>
    );
}