import React from 'react'
import Header from './components/home/Header'
import { Grid } from "@mui/material";
import SortBar from './components/home/SortBar';

const App = () => {
  return (
    <div>
      <Header />
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          <SortBar />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
