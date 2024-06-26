import { Box, Button, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      sx={{
        backgroundImage: `url(https://wallpapers.com/images/featured/food-table-1j6ik0elenqlwh4k.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "32px",
          textAlign: "center",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "16px" }} gutterBottom>
          ¡Bienvenido!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "32px" }} paragraph>
          Por favor, inicia sesión para acceder al dashboard de administración.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            bgcolor: "#FE5A1D",
            "&:hover": {
              bgcolor: "#FFA500",
            },
          }}
          onClick={() => loginWithRedirect({
            appState: {
              returnTo: window.location.pathname,
            },
          })}
        >
          Iniciar sesión
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
