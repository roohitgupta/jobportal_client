import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import JobApplyModel from './JobApplyModel';


const useStyles = makeStyles({
  wrapper: {
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    borderBottom: "2px solid black",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "6px",
    "&:hover": {
      borderLeft: "8px solid brown",
      borderRight: "8px solid brown",
    },
  },
  companyName: {
    backgroundColor: "green",
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: "bolder",
    padding: "5px",
  },
  
});

const JobListBox = () => {
  const classes = useStyles();
  const [jobPost, setJobPost] = useState([]);
  const [openApplyModel, setOpenApplyModel] = useState(false);

  const closeApplyBox = ()=> {
    setOpenApplyModel(false);
  }

  async function jobPostData() {
    try {
      const response = await fetch("http://localhost:5000/api/jobpost");
      const data = await response.json();
      console.log(data);
      setJobPost(data);
    } catch (error) {
      console.log("error:", error);
    }
  }

  useEffect(() => {
    jobPostData();
  }, []);

  return (
    <div>
      <Box p={2}  >
        {jobPost.map((e) => (
          <Grid key={e._id} className={classes.wrapper} container alignItems="center">
            <Grid item xs>
              <Typography variant="subtitle1">{e.jobtitle}</Typography>
              <Typography className={classes.companyName} variant="subtitle1">
                {e.company}
              </Typography>
            </Grid>
            <Grid item xs>
              {e.description}
            </Grid>
            <Grid item container direction="column" alignItems="flex-end" xs>
              <Grid item>
                <Typography variant="subtitle1">{e.location}</Typography>
              </Grid>
              <Grid item>
                <Button onClick={()=>setOpenApplyModel(true)} variant="contained" size="medium">
                  Apply
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <JobApplyModel open={openApplyModel} fun2close={closeApplyBox} />
      </Box>
    </div>
  );
};

export default JobListBox;
