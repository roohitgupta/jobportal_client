import React from "react";
import { Box, Button, Select, MenuItem, Grid } from "@mui/material";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    wrapper: { 
        border: "3px solid black",
        backgroundColor: "white",
        position: "relative",
        top: "-30px",
        borderRadius: "10px",
        padding: "3px 8px"

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
            <Button variant="contained" color="primary" size="medium">
              Sort
            </Button>
          </Box>
          <Box>
            <Select disableUnderline variant="filled" defaultValue="Full Time">
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
            </Select>
            <Button variant="contained" color="primary" size="medium">
              Filter
            </Button>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default SortBar;
