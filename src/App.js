import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  return (
    // this is a React.Fragment
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          {/* List is going to take 4/12 space in Medium to Large Devices and full 12 space in Small Devices */}
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          {/* List is going to take 8/12 space in Medium to Large Devices and full 12 space in Small Devices */}
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
