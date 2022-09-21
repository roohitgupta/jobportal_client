import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { padding } from "@mui/system";

const skills = ["JavaScript", "Node.js", "React.js"];

const useStyles = makeStyles({
  wrapper: {
    border: "1px solid blue",
    "&:hover": {
      borderLeft: "6px solid blue",
    },
  },
  companyName: {
    backgroundColor: "green",
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: "bolder",
    padding: "5px",
  },
  skillsName: {
    backgroundColor: "purple",
    borderRadius: "5px",
    fontWeight: "bolder",
    color: "white",
    cursor: "pointer",
    padding: "3px 6px",
  },
});

const JobListBox = () => {
  const classes = useStyles();
  const [jobPost, setJobPost] = useState([]);

  async function jobPostData() {
    try {
      const response = await fetch("http://localhost:5000/api/jobpost");
      const data = await response.json();
      console.log(data);
      setJobPost(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    jobPostData();
  }, []);

  return (
    <div>
      <Box p={2} className={classes.wrapper}>
        {jobPost.map((e) => (
          <Grid key={e._id} container alignItems="center">
            <Grid item xs>
              <Typography variant="subtitle1">{e.jobtitle}</Typography>
              <Typography className={classes.companyName} variant="subtitle1">
                {e.company}
              </Typography>
            </Grid>
            <Grid item container xs>
              {skills.map((e) => (
                <Grid className={classes.skillsName} key={e} item>
                  {e}
                </Grid>
              ))}
            </Grid>
            <Grid item container direction="column" alignItems="flex-end" xs>
              <Grid item>
                <Typography variant="subtitle1">{e.location}</Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="success">
                  Apply
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Box>
    </div>
  );
};

export default JobListBox;
