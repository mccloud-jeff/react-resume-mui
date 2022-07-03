import React, { FunctionComponent } from "react";
import {
  AppBar,
  Box,
  Grid,
  Link,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

interface NameHeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  sticky?: boolean;
}

interface SummaryHeaderProps {
  summary: string;
}

interface HeaderProps extends NameHeaderProps, SummaryHeaderProps {}

const NameHeader: FunctionComponent<NameHeaderProps> = ({
  name,
  title,
  email,
  phone,
  sticky,
}) => (
  <AppBar
    position={sticky ? "sticky" : "relative"}
    sx={{ p: "0.125in 0.25in 0.125in 0.25in" }}
    elevation={0}
    className={sticky ? "screenOnly" : "printOnly"}
  >
    <Grid container>
      <Typography
        variant="h4"
        sx={{ textTransform: "uppercase", flexGrow: 1, whiteSpace: "nowrap" }}
      >
        {name}
      </Typography>
      <Box>
        <Link color="white" underline="hover" href={`mailto:${email}`}>
          <ListItem dense>
            <ListItemIcon sx={{ minWidth: 32, color: "unset" }}>
              <EmailIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="subtitle2" fontWeight={700}>
              {email}
            </Typography>
          </ListItem>
        </Link>
        <Link color="white" underline="hover" href={`tel:${phone}`}>
          <ListItem dense>
            <ListItemIcon sx={{ minWidth: 32, color: "unset" }}>
              <PhoneIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="subtitle2" fontWeight={700}>
              {phone}
            </Typography>
          </ListItem>
        </Link>
      </Box>
    </Grid>
    <hr />
    <Typography variant="subtitle1">{title}</Typography>
  </AppBar>
);

const SummaryHeader: FunctionComponent<SummaryHeaderProps> = ({ summary }) => (
  <AppBar
    position="relative"
    sx={{ p: "0 0.25in 0.125in 0.25in" }}
    elevation={0}
  >
    <Typography variant="caption">{summary}</Typography>
  </AppBar>
);

const Header: FunctionComponent<HeaderProps> = ({
  summary,
  ...headerProps
}) => {
  return (
    <>
      <NameHeader {...headerProps} />
      <NameHeader {...headerProps} sticky />
      <SummaryHeader summary={summary} />
    </>
  );
};

export default Header;
