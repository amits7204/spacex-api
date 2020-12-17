import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    marginRight: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  btn: {
    marginLeft: "auto",
    display: "flex",
    gap: 20,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();

  const handleHistoryButton = () => {
    console.log("History");
    history.push("/history");
  };

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar variant="regular">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png"
            height="25px"
            width="130px"
            alt="spacex"
            className={classes.icon}
          />
          <div className={classes.btn}>
            <Button
              onClick={() => handleHistoryButton()}
              style={{ fontWeight: "bold" }}
              color="inherit"
            >
              History
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
