import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  PaletteMode,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import PaletteIcon from "@mui/icons-material/Palette";
import CheckIcon from "@mui/icons-material/Check";

import ToolButton from "../ToolButton";

interface PaletteModeButtonProps {
  onModeChange: (mode?: string) => void;
}

const PaletteModeButton: FunctionComponent<PaletteModeButtonProps> = ({
  onModeChange,
}) => {
  const systemMode: PaletteMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  const theme = useTheme();

  const [paletteMode, setPaletteMode] = useState<string | undefined>(
    theme.palette.mode
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (mode?: string) => {
    setAnchorEl(null);

    setPaletteMode(mode);
    onModeChange(mode);
  };

  return (
    <>
      <ToolButton
        Icon={PaletteIcon}
        tooltip="Select Dark/Light Mode"
        onClick={handleClick}
      />
      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
        <div style={{ width: 160 }}>
          <MenuItem
            onClick={() => handleClose("light")}
            selected={paletteMode === "light"}
          >
            <ListItemIcon>
              <LightModeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Light</ListItemText>
            {paletteMode === "light" && <CheckIcon />}
          </MenuItem>
          <MenuItem
            onClick={() => handleClose("dark")}
            selected={paletteMode === "dark"}
          >
            <ListItemIcon>
              <DarkModeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Dark</ListItemText>
            {paletteMode === "dark" && <CheckIcon />}
          </MenuItem>
          <MenuItem onClick={() => handleClose()} selected={!paletteMode}>
            <ListItemIcon>
              <SettingsBrightnessIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>System</ListItemText>
            {!paletteMode && <CheckIcon />}
          </MenuItem>
        </div>
      </Menu>
    </>
  );
};

export default PaletteModeButton;
