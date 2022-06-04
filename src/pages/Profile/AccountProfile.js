import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    Typography,
  } from "@mui/material";
  
  const user = {
    avatar: "../../assets/images/avatar.png",
    skills:
      "JavaScript | ReactJS | Redux | Redux Toolkit | HTML5 | CSS3 | Github",
    jobTitle: "Senior Developer",
    name: "Смирнов Александр",
    skills2: "BEM | SCSS | GULP | Material-UI",
  };
  
  export const AccountProfile = (props) => (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            pb: 9,
            flexDirection: "column",
          }}
        >
          <Avatar
            src={`${user.avatar}`}
            sx={{
              height: 240,
              mb: 4.4,
              width: 240,
              backgroundColor: "#eee",
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h4">
            {user.name}
          </Typography>
          <Typography color="textSecondary" align="center" variant="body2">
            {`${user.skills} `}
          </Typography>
          <Typography
            align="center"
            justifyContent="center"
            color="textSecondary"
            variant="body2"
          >
            {user.skills2}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
  