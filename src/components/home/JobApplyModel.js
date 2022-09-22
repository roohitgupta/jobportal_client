import React, { useState } from "react";
import {
  Box,
  Button,
  FilledInput,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  wrapper: {
    border: "1px solid black",
    marginTop: "6px",
  },
  
});

const JobApplyModel = (props) => {
  const classes = useStyles();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [expectedCTC, setExpectedCTC] = useState("");
  const [experience, setExperience] = useState("");


  async function ApplyJob(){
    const response = await fetch("http://localhost:5000/api/applyjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        expectedCTC,
        experience,
      })
    });
    const data = await response.json();
    
  };



  return ( 
    <div>
      <Dialog open={props.open} fullWidth>
        <DialogTitle>Apply Job</DialogTitle>
        <DialogContent  >
          <Grid container>
            <Grid item xs={12}>
              <FilledInput
                className={classes.wrapper}
                placeholder="Name"
                disableUnderline
                fullWidth
                type="text"
                onChange={(e)=> setName(e.target.value)}
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="E-mail"
                disableUnderline
                fullWidth
                type="email"
                onChange={(e)=> setEmail(e.target.value)}
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Expected CTC"
                disableUnderline
                fullWidth
                onChange={(e)=> setExpectedCTC(e.target.value)}
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Experience"
                multiline
                rows={2}
                disableUnderline
                fullWidth
                onChange={(e)=> setExperience(e.target.value)}
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Resume Upload"
                disableUnderline
                fullWidth
                type="file"
              ></FilledInput>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" disableElevation color="primary">
            Apply
          </Button>
          <Button onClick={()=>props.fun2close()} variant="outlined">Cancle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JobApplyModel;
