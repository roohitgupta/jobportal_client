import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/home/Header'
import { Grid } from "@mui/material";
import SortBar from './components/home/SortBar';
import JobListBox from './components/home/JobListBox';


const App = () => {
  return (
    <div>
      <Header />
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          <SortBar />
          <JobListBox />
        </Grid>
      </Grid>

      {/* <Routes>
        <Route path="/newjobpost" element={<NewJobModel />} />
      </Routes> */}
    </div>
  )
}

export default App
