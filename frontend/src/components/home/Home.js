import React from "react";
import ResponsiveAppBar from "../navbar/Navbar";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <Grid container spacing={2} style={{padding:'20px'}}>
        <Grid size={{xs:12,md:6,lg:6}}>
          <h1>Welcome to the Home Page</h1>
          <p>This is a simple home page component.</p>
          <p>You can add more content here as needed.</p>
        </Grid>
        <Grid size={{xs:12,md:6,lg:6}}>
          <img src="task-list.svg" alt="task app" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
