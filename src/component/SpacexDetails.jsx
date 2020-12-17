import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  Typography: {
    color: "#263238",
    fontSize: 16,
  },
}));

export default function SpacexDetails(props) {
  console.log("ProPS: ", props);
  const classes = useStyles();
  const {
    payload_id,
    nationality,
    manufacturer,
    payload_type,
    orbit,
    payload_mass_kg,
    payload_mass_lbs,
    reused,
  } = props.location.state;
  return (
    <>
      <Typography className={classes.Typography} variant="h4" align="left">
        Payload id:
        <small style={{ color: "#004d40", marginLeft: "6px" }}>
          {payload_id}
        </small>
      </Typography>
      <Typography align="left" className={classes.Typography}>
        nationality:
        <small style={{ color: "#004d40", marginLeft: "6px" }}>
          {nationality}
        </small>
      </Typography>
      <Typography className={classes.Typography} align="left">
        Manufacturer:
        <small style={{ color: "#004d40", marginLeft: "6px" }}>
          {manufacturer}
        </small>
      </Typography>
      <Typography className={classes.Typography} align="left">
        Payload type:
        <small style={{ color: "#004d40", marginLeft: "6px" }}>
          {payload_type}
        </small>
      </Typography>
      <Typography className={classes.Typography} align="left">
        Orbit:
        <small style={{ color: "#004d40", marginLeft: "6px" }}>{orbit}</small>
      </Typography>
      <Typography className={classes.Typography} align="left">
        Payload Mass kg:
        <small style={{ color: "#004d40", marginLeft: "6px" }}>
          {payload_mass_kg || "null"}
        </small>
      </Typography>
      <Typography className={classes.Typography} align="left">
        Payload Mass lbs:
        <small style={{ color: "#004d40", marginLeft: "6px" }}>
          {payload_mass_lbs || "null"}
        </small>
      </Typography>
      <Typography className={classes.Typography} align="left">
        Reused:
        <small style={{ color: "#004d40", marginLeft: "6px" }}>
          {reused || "null"}
        </small>
      </Typography>
    </>
  );
}
