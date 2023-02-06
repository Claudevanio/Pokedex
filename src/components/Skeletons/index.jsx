import React from "react";
import { Skeleton } from "@mui/material";

export const Skeletons = () => {
  return (
    <Skeleton
      sx={{
        maxWidth: 345,
        borderRadius: "24px",
        height: 575,
        marginY: -13,
        marginX: 1,
      }}
    />
  );
};
