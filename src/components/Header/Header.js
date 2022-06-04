import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { List, ListItem, ListItemText } from "@mui/material";
import Color from "../Color";

function Header(props) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar component="div" color="primary" position="sticky" elevation={6}>
        <Toolbar>
          <Grid container spacing={1} sx={{ display: "flex" }}>
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => {
                  onDrawerToggle();
                }}
                edge="start"
              >
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid sx={{ mt: 1.5 }} item xs>
              <ListItemText>11</ListItemText>
            </Grid>
            <Grid
              component="div"
              sx={{ display: "flex", mt: 0, justifyContent: "space-even" }}
            >
              <List>
                <ListItem sx={{ mt: 0 }} edge="end">
                  <Color
                    setColorMain={props.setColorMain}
                    setColorSecondary={props.setColorSecondary}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
