import React from "react";
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

const JobApplyModel = () => {
  const classes = useStyles();
  return ( 
    <div>
      <Dialog open={true} fullWidth>
        <DialogTitle>Post Job</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <FilledInput
                className={classes.wrapper}
                placeholder="Name"
                disableUnderline
                fullWidth
                type="text"
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="E-mail"
                disableUnderline
                fullWidth
                type="email"
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Expected CTC"
                disableUnderline
                fullWidth
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Experience"
                multiline
                rows={2}
                disableUnderline
                fullWidth
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
            Post Job
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JobApplyModel;
