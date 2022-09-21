import React, { useEffect, useState } from "react";
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

const NewJobModel = () => {

  const [jobtitle, setJobtitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");


  async function jobPost(){
    const response = await fetch("http://localhost:5000/api/jobpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jobtitle,
        company,
        location,
        description
      })
    });
    const data = await response.json();
    console.log(data);
  };



  const classes = useStyles();
  return (
    <div>
      <Dialog open={false} fullWidth>
        <DialogTitle>Post Job</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <FilledInput
                className={classes.wrapper}
                placeholder="Job Title"
                disableUnderline
                fullWidth
                onChange={(e)=> setJobtitle(e.target.value)}
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Company"
                disableUnderline
                fullWidth
                onChange={(e)=> setCompany(e.target.value)}
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Location"
                disableUnderline
                fullWidth
                onChange={(e)=> setLocation(e.target.value)}
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Description"
                multiline
                rows={2}
                disableUnderline
                fullWidth
                onChange={(e)=> setDescription(e.target.value)}
              ></FilledInput>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={jobPost} variant="contained" disableElevation color="primary">
            Post Job
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
};

export default NewJobModel;
