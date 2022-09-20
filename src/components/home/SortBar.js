import React from "react";
import { Box, Button, Select, MenuItem, Grid } from "@mui/material";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    wrapper: {
        // border: "1px solid black",
        backgroundColor: "white",
        position: "relative",
        top: "-30px",
    }
})


const SortBar = () => {
    const classes = useStyles();
  return (
    <div>
      <Box className={classes.wrapper}>
        <Grid display="flex" justifyContent="space-between">
          <Box>
            <Select disableUnderline variant="filled" defaultValue="Newer">
              <MenuItem value="Newer">Newer</MenuItem>
              <MenuItem value="Older">Older</MenuItem>
            </Select>
            <Button variant="contained" color="primary">
              Sort
            </Button>
          </Box>
          <Box>
            <Select disableUnderline variant="filled" defaultValue="Full Time">
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
            </Select>
            <Button variant="contained" color="primary">
              Filter
            </Button>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default SortBar;
