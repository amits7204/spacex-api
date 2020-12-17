import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";

import Pagination from "@material-ui/lab/Pagination";

import { getPayloadData } from "../redux/ActionCreator";

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

export default function Home() {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => dispatch(getPayloadData()), [dispatch]);
  const history = useHistory();
  const { payloadData, isError } = useSelector((state) => state.spacex);
  const [active, setActive] = useState(1);

  const totalPages = Math.ceil(payloadData.length / 12);
  let offSet = (active - 1) * 12;

  console.log("Space: ", payloadData);

  const handlePagination = (e, value) => {
    setActive(value);
  };

  const handleMoreButton = (items) => {
    console.log("ITEMS: ", items);
    const {
      payload_id,
      nationality,
      manufacturer,
      payload_type,
      orbit,
      payload_mass_kg,
      payload_mass_lbs,
      reused,
    } = items;
    history.push({
      pathname: `/more/${payload_id}`,
      state: {
        payload_id: payload_id,
        nationality: nationality,
        manufacturer: manufacturer,
        payload_type: payload_type,
        orbit: orbit,
        payload_mass_kg: payload_mass_kg,
        payload_mass_lbs: payload_mass_lbs,
        reused: reused,
      },
    });
  };
  return (
    <Grid
      justify="center"
      className={classes.root}
      alignItems="center"
      container
    >
      <Grid container spacing={3}>
        {!isError ? (
          payloadData
            .filter((item, index) => index >= offSet && index < offSet + 12)
            .map((items) => {
              return (
                <Grid item xs={3} key={items.payload_id}>
                  <Typography
                    className={classes.Typography}
                    variant="h4"
                    align="left"
                  >
                    Payload id:
                    <small style={{ color: "#004d40", marginLeft: "6px" }}>
                      {items.payload_id}
                    </small>
                  </Typography>
                  <Typography align="left" className={classes.Typography}>
                    nationality:
                    <small style={{ color: "#004d40", marginLeft: "6px" }}>
                      {items.nationality}
                    </small>
                  </Typography>
                  <Typography className={classes.Typography} align="left">
                    Manufacturer:
                    <small style={{ color: "#004d40", marginLeft: "6px" }}>
                      {items.manufacturer}
                    </small>
                  </Typography>
                  <Typography className={classes.Typography} align="left">
                    Payload type:
                    <small style={{ color: "#004d40", marginLeft: "6px" }}>
                      {items.payload_type}
                    </small>
                  </Typography>
                  <Button
                    onClick={() => handleMoreButton(items)}
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    More...
                  </Button>
                </Grid>
              );
            })
        ) : (
          <Grid justify="center" alignItems="center" container>
            <p>Loading...</p>
          </Grid>
        )}
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
