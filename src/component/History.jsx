import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import Pagination from "@material-ui/lab/Pagination";

import { getHistoryData } from "../redux/historyRedux/HistoryCreator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  Typography: {
    color: "#263238",
    fontSize: 16,
  },
}));

export default function History() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistoryData());
  }, [dispatch]);
  const historyData = useSelector((state) => state.spacexHistory.historyData);
  const [active, setActive] = useState(1);

  const totalPages = Math.ceil(historyData.length / 10);
  let offSet = (active - 1) * 10;

  console.log("Spacex History: ", historyData);

  const handlePagination = (e, value) => {
    setActive(value);
  };

  return (
    <Grid
      justify="center"
      className={classes.root}
      alignItems="center"
      container
    >
      <Grid container spacing={3}>
        {historyData &&
          historyData
            .filter((item, index) => index >= offSet && index < offSet + 10)
            .map((items) => {
              return (
                <Grid item xs={3} key={items.id}>
                  <Typography
                    className={classes.Typography}
                    variant="h4"
                    align="left"
                  >
                    id:
                    <small style={{ color: "#004d40", marginLeft: "6px" }}>
                      {items.id}
                    </small>
                  </Typography>
                  <Typography align="left" className={classes.Typography}>
                    Title:
                    <small style={{ color: "#004d40", marginLeft: "6px" }}>
                      {items.title}
                    </small>
                  </Typography>
                  <Typography className={classes.Typography} align="left">
                    Details:
                    <small style={{ color: "#004d40", marginLeft: "6px" }}>
                      {items.Details}
                    </small>
                  </Typography>
                  <Typography className={classes.Typography} align="left">
                    Flight Number:
                    <small style={{ color: "#004d40", marginLeft: "6px" }}>
                      {items.flight_number}
                    </small>
                  </Typography>
                </Grid>
              );
            })}
      </Grid>
      <Grid>
        <Pagination
          page={active}
          count={totalPages}
          onChange={handlePagination}
          color="secondary"
        />
      </Grid>
    </Grid>
  );
}
