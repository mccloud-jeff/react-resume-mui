import React, { FunctionComponent } from "react";
import { ListItem, ListItemProps } from "@mui/material";

interface BulletListItemProps extends ListItemProps {
  hideBullet?: boolean;
}

const BulletListItem: FunctionComponent<BulletListItemProps> = ({
  children,
  hideBullet = false,
}) => (
  <ListItem
    sx={{ display: hideBullet ? "block" : "list-item", lineHeight: 1.25 }}
    dense
  >
    {children}
  </ListItem>
);

export default BulletListItem;
