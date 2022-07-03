import React, { FunctionComponent, ElementType } from "react";
import { IconButton, IconButtonProps, Tooltip } from "@mui/material";

interface ToolButtonProps extends IconButtonProps {
  Icon: ElementType;
  tooltip: string;
}

const ToolButton: FunctionComponent<ToolButtonProps> = ({
  Icon,
  tooltip,
  ...props
}) => (
  <Tooltip title={tooltip} arrow>
    <IconButton color="inherit" {...props}>
      <Icon />
    </IconButton>
  </Tooltip>
);

export default ToolButton;
