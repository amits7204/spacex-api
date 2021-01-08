import React, {useState, useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import {postContactData} from "../redux/ActionCreator"
import {useDispatch, useSelector} from "react-redux"
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
    root: {
      width: 275,
      margin: "auto", 
      marginTop: "20px"
    }
  });


export default function ComposeMessage(props){
    const classes = useStyles();
    const {phone_number} = props.history.location.state
    const dispatch = useDispatch()
    const [item, setItem] = useState([])
    const data = useSelector((state)=>state.contacts.data)
    console.log("DATA: ", data)
    // useEffect(()=>{
      
    // },[data])
    
    console.log("SETITEM: ",item)
    // items.push(data)
    // localStorage.setItem('smsItems', JSON.stringify(items));
    // if (localStorage.getItem("smsItems") === null) {
    //     // items.push(data)
    //     localStorage.setItem('smsItems', JSON.stringify(items));
    //     }
    //     else
    //     {
    //     let smsItems = JSON.parse(localStorage.getItem("smsItems"));
    //     // localStorage.setItem('smsItems', JSON.stringify(...smsItems, data));
    //     }
        // localStorage.setItem('smsItems', JSON.stringify(items));
    const { register, handleSubmit } = useForm();
    const handleSendButton = (messageData) =>{
        const {message} = messageData
        dispatch(postContactData({phone_number, message}))
        
        setItem([...item, data])
    }
    return(<>
        <form className={classes.root} onSubmit={handleSubmit(handleSendButton)} noValidate autoComplete="off">
             <TextField id="outlined-basic" label="Phone Number" variant="outlined" defaultValue={phone_number} />  
             <br />
             <br />
             <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                name="message"
                rows={4}
                defaultValue=""
                variant="outlined"
                inputRef={register}
                />
                <br />
                <br />
                <Button type="submit" size="small" variant="outlined">Send</Button>
        </form>
          
        
      </>)
}