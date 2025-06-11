import React from 'react';
import ResponsiveAppBar from '../navbar/Navbar';
import { 
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  CssBaseline,
  InputAdornment,
  IconButton,
  FormControl,
  Link
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Reuse the same theme from Register page for consistency
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
});

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password')
    });
    // Add your login logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <ResponsiveAppBar />
        <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
          <Paper elevation={6} sx={{
            padding: { xs: 3, md: 4 },
            borderRadius: 3,
            boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <Typography component="h1" variant="h4" align="center" sx={{
              color: '#1976d2',
              mb: 2,
              fontWeight: 700
            }}>
              Login
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  sx={{
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      borderWidth: 2
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#1976d2'
                    }
                  }}
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  mt: 2,
                  mb: 2,
                  py: 1.5,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                Login
              </Button>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Link href="/forgot-password" variant="body2" sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: 'primary.main'
                  }
                }}>
                  Forgot password?
                </Link>
                <Link href="/register" variant="body2" sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: 'primary.main'
                  }
                }}>
                  Don't have an account? Sign Up
                </Link>
              </Box>
            </Box>
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Login;