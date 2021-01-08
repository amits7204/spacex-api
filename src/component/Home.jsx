import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";

import Pagination from "@material-ui/lab/Pagination";

import { getContactData } from "../redux/ActionCreator";

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
  useEffect(() => dispatch(getContactData()), [dispatch]);
  const history = useHistory();
  const { contactData, isError } = useSelector((state) => state.contacts);
  const [active, setActive] = useState(1);

  const totalPages = Math.ceil(contactData.length / 5);
  let offSet = (active - 1) * 5;

  console.log("Space: ", contactData);

  const handlePagination = (e, value) => {
    setActive(value);
  };

  const handleMoreButton = (items) => {
    console.log("ITEMS: ", items);
    const {
      _id,
      first_name,
      last_name,
      phone_number,
    } = items;
    history.push({
      pathname: `/contactInfo/${_id}`,
      state: {
        _id:_id,
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
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
          contactData && contactData
            .filter((item, index) => index >= offSet && index < offSet + 5)
            .map((items) => {
              return (
                <Grid item xs={3} key={items._id}>
                  <Typography
                    className={classes.Typography}
                    variant="h4"
                    align="center"
                  >
                    {items.first_name+" "+items.last_name}
                  </Typography>
                  <Button
                    onClick={() => handleMoreButton(items)}
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    Info
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
