import React from 'react'

import {useHistory} from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: 275,
      margin: "auto", 
      marginTop: "20px"
    }
  });

export default function ContactInfo(props){
    const classes = useStyles();
    console.log("PROPS: ", props.history.location.state)
    const { first_name, last_name, phone_number} = props.history.location.state
    const history = useHistory();
    const handleSendMessage = ()=>{
      history.push({
        pathname: `/composemsg`,
      state: {
        phone_number: phone_number,
      }
      })
    }
    return(<Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
            {first_name+" "+last_name}
          </Typography>
          <Typography variant="h5" component="h2">
           {phone_number}
          </Typography>
          <Button onClick={handleSendMessage} size="small" variant="outlined">Send message</Button>
        </CardContent>
      </Card>)
}