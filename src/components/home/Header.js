import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <Box p={10} bgcolor="black" color="white">
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h4">Open Job Listing</Typography>
            <Button variant="contained" color="success">
              Post a Job
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
