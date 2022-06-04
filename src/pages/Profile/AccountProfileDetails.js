import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export const AccountProfileDetails = (props) => {
  return (
    <Card>
      <CardHeader
        sx={{ justifyContent: "center" }}
        subheader="Chemical engineering graduate transitioning into software engineering"
        title="Fullstack Developer"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Typography align="left" variant="body2">
              Я страстный и целеустремленный разработчик полного стека с опытом
              использования интерфейсных и серверных технологий, таких как
              JavaScript, ReactJS, Bootstrap, Material-UI, Node, Ruby, Sinatra и
              Rails. Люблю создавать новые проекты и оптимизировать их. Также
              стремлюсь писать чистый, читаемый и масштабируемый код!<br></br>
              Окончил Педагогическую Академию, кафедра математика/информатика.
              После погрузился в изучение языков программирования. В настоящее
              время нашел свою любовь к программированию на языке JavaScript.
              Постоянно совершенствуюсь и хочу стать опытным и профессиональным
              программистом!
              <br></br>
              <br></br> Я недавно окончил 15-недельный иммерсивный учебный
              лагерь Flatiron School и хотел бы применить свои навыки решения
              проблем, программирования и командной работы, чтобы помочь
              клиентам и комманде.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          p: 2,
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            props.navigate("/projects");
            props.setSelectedIndex(1);
          }}
        >
          Перейти к проектам
        </Button>
      </Box>
    </Card>
  );
};
