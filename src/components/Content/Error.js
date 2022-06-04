import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Error = () => (
  <>
    <title>404 | Такой страницы нет!</title>

    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography align="center" color="textPrimary" variant="h1">
            404: Такой страницы нет!
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            Ничего страшного, есть другие.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <img
              alt="Under development"
              src="/static/images/undraw_page_not_found_su7k.svg"
              style={{
                marginTop: 50,
                display: "inline-block",
                maxWidth: "100%",
                width: 560,
              }}
            />
          </Box>

          <Button
            component="a"
            startIcon={<ArrowBackIcon fontSize="small" />}
            sx={{ my: 3 }}
            variant="contained"
          >
            Вернуться
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default Error;
