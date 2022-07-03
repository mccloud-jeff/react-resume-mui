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

interface HeaderProps {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
}

const Header: FunctionComponent<HeaderProps> = ({
  name,
  title,
  summary,
  email,
  phone,
}) => (
  <>
    <AppBar position="relative" sx={{ p: "0.125in 0.25in 0.125in 0.25in" }} elevation={0}>
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
    <AppBar
      position="relative"
      sx={{ p: "0 0.25in 0.125in 0.25in" }}
      elevation={0}
    >
      <Typography variant="caption">{summary}</Typography>
      {/* <Grid container sx={{ mt: 1 }}>
        <Grid item sm={6}>
          <Link color="white" underline="hover" href={`mailto:${email}`}>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 32, color: "unset" }}>
                <EmailIcon />
              </ListItemIcon>
              <Typography component="span" fontWeight={700}>
                {email}
              </Typography>
            </ListItem>
          </Link>
        </Grid>
        <Grid item sm={6}>
          <Link color="white" underline="hover" href={`tel:${phone}`}>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 32, color: "unset" }}>
                <PhoneIcon />
              </ListItemIcon>
              <Typography component="span" fontWeight={700}>
                {phone}
              </Typography>
            </ListItem>
          </Link>
        </Grid>
      </Grid> */}
    </AppBar>
  </>
);

export default Header;
