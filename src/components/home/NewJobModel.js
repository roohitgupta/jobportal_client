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

const NewJobModel = () => {
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
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Company"
                disableUnderline
                fullWidth
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Location"
                disableUnderline
                fullWidth
              ></FilledInput>
              <FilledInput
                className={classes.wrapper}
                placeholder="Description"
                multiline
                rows={2}
                disableUnderline
                fullWidth
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

export default NewJobModel;
