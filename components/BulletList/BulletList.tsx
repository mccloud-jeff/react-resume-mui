import React, { FunctionComponent } from "react";
import { List, ListProps } from "@mui/material";

const BulletList: FunctionComponent<ListProps> = ({ children }) => (
  <List sx={{ listStyleType: "disc", fontSize: "smaller", p: 0, ml: 5 }}>{children}</List>
);

export default BulletList;
