import React from "react";
import { Grid, Skeleton } from "@mui/material";

export const Skeletons = () => {
  return (
    <Grid container spacing={3}>
      {Array.from({ length: 20 }, (_, index) => (
        <Grid item marginX={2} xs={6} sm={4} md={3} lg={2} key={index}>
          <Skeleton rounded="lg" width={250} height={250} />
        </Grid>
      ))}
    </Grid>
  );
};
