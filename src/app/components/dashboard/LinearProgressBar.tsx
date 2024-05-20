"use client";
import React from "react";
import { LinearProgress, linearProgressClasses, styled } from "@mui/material";

const LinearProgressBar = React.memo(function LinearProgressBar({
  height = 8,
  borderRadius = 5,
  value,
  type = "determinate",
}: {
  height?: number;
  borderRadius?: number;
  value: number;
  type?: "buffer" | "determinate" | "indeterminate" | "query";
}) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width: "100%",
    height: height,
    borderRadius: borderRadius,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#4B49AC" : "#308fe8",
    },
  }));
  return <BorderLinearProgress variant={type} value={value} />;
});

export default LinearProgressBar;
