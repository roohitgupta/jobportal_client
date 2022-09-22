import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import NewJobModel from "./NewJobModel";

// Header section with Post a job Button

const Header = (props) => {
  const [openJobPostModel, setOpenJobPostModel] = useState(false);

  const closeJobModel = () => {
    setOpenJobPostModel(false);
  };

  return (
    <Box p={10} bgcolor="black" color="white">
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h4">Open Job Listing</Typography>
            </Box>
            <Box>
              <Button
                onClick={() => setOpenJobPostModel(true)}
                variant="contained"
                color="success"
                size="large"
              >
                Post a Job
              </Button>
              <Button sx={{ml:3}} variant="contained" color="success" size="large">
                Applyied Candidate
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <NewJobModel
        fetch2func={props.fetch2func()}
        open={openJobPostModel}
        funClose={closeJobModel}
      />
    </Box>
  );
};

export default Header;
