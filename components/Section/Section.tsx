import React, { ElementType, FunctionComponent, ReactNode } from "react";
import { List, ListItem, ListItemIcon, Typography, useTheme } from "@mui/material";

interface SectionProps {
  iconComponent?: ElementType;
  title?: string;
  children?: ReactNode;
}

const Section: FunctionComponent<SectionProps> = ({
  iconComponent,
  title,
  children,
}) => {
  const theme = useTheme();
  const SectionIcon = iconComponent;

  return (
    <List sx={{ ml: 3, mb: 4, p: 0 }}>
      <ListItem sx={{ mb: 3, mt: 3, borderBottom: `1px solid ${theme.palette.text.primary}`, width: "calc(100% - 0.25in)" }}>
        {SectionIcon && (
          <ListItemIcon sx={{ mr: -2.5 }}>
            <SectionIcon color="primary" />
          </ListItemIcon>
        )}
        {title && <Typography fontWeight={700} color="primary">{title}</Typography>}
      </ListItem>
      {children}
    </List>
  );
};

export default Section;
