import React, { FunctionComponent } from "react";
import { AppBar, Toolbar as MuiToolbar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PrintIcon from "@mui/icons-material/Print";

import ToolButton from "../ToolButton";
import PaletteModeButton from "../PaletteModeButton";

interface ToolButtonBarProps {
  onPaletteModeChange: (mode?: string) => void;
}

const ToolButtonBar: FunctionComponent<ToolButtonBarProps> = ({
  onPaletteModeChange,
}) => {
  return (
    <>
      <AppBar position="relative" color="default" className="screenOnly">
        <MuiToolbar variant="dense">
          <PaletteModeButton onModeChange={onPaletteModeChange} />
          <div style={{ flexGrow: 1 }} />
          {/* <ToolButton
            Icon={PrintIcon}
            tooltip="Print Resume"
            onClick={() => self.print()}
          /> */}
          <ToolButton
            Icon={GitHubIcon}
            tooltip="View Code on GitHub"
            onClick={() =>
              window.open("https://github.com/mccloud-jeff/react-resume-mui")
            }
          />
        </MuiToolbar>
      </AppBar>
    </>
  );
};

export default ToolButtonBar;
