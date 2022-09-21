import React from 'react'
import Header from './components/home/Header'
import { Grid } from "@mui/material";
import SortBar from './components/home/SortBar';
import JobListBox from './components/home/JobListBox';
import NewJobModel from './components/home/NewJobModel';
import JobApplyModel from './components/home/JobApplyModel';

const App = () => {
  return (
    <div>
      <Header />
      <NewJobModel />
      <JobApplyModel />
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          <SortBar />
          <JobListBox />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
