import React from "react";
import { Outlet } from "react-router-dom";

export default function Result() {
  return (
    <div>
      <h2>Result</h2>
      <Outlet />
    </div>
  );
}
