import React, { FunctionComponent } from "react";
import {
  Avatar,
  Box,
  Link,
  ListItem,
  ListItemAvatar,
  Typography,
  useTheme,
} from "@mui/material";
import { format, formatDuration, intervalToDuration } from "date-fns";

import BulletList, { BulletListItem } from "../BulletList";

interface PositionProps {
  title?: string;
  name: string;
  startDate?: string;
  endDate?: string;
  dateText?: string;
  details: string[];
  summary?: string;
  logo?: string;
  website?: string;
}

const formatDateText = (startDate: string, endDate?: string) => {
  const dateEnd: Date = endDate ? new Date(Date.parse(endDate)) : new Date();
  const endDateText: string = endDate
    ? format(dateEnd, "MMMM yyyy")
    : "Present";

  return (
    format(Date.parse(startDate), "MMMM yyyy") +
    " to " +
    endDateText +
    " (" +
    formatDuration(
      intervalToDuration({
        start: Date.parse(startDate),
        end: endDate ? Date.parse(endDate) : new Date(),
      }),
      { format: ["years", "months"] }
    ) +
    ")"
  );
};

const Position: FunctionComponent<PositionProps> = ({
  title,
  name,
  startDate,
  endDate,
  dateText,
  details,
  summary,
  logo,
  website,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 3 }}>
      <ListItem sx={{ p: 0 }} alignItems="flex-start">
        <ListItemAvatar sx={{ minWidth: 40 }}>
          {logo && (
            <Link href={website} target={`${website ? "_blank" : ""}`}>
              <Avatar
                variant="square"
                src={logo}
                sx={{ boxShadow: theme.shadows[2] }}
              />
            </Link>
          )}
        </ListItemAvatar>
        <Box sx={{ ml: 2, mb: 1 }}>
          {title && (
            <Typography variant="body1" fontWeight={700} component="div">
              {title}
            </Typography>
          )}
          <Typography variant="caption" fontWeight={700} component="div">
            {name}
          </Typography>
          <Typography variant="caption" color="primary" component="div">
            {startDate ? formatDateText(startDate, endDate) : dateText}
          </Typography>
        </Box>
      </ListItem>
      <BulletList>
        {details.map((detail) => (
          <BulletListItem key={detail} hideBullet={details.length === 1}>
            {detail}
          </BulletListItem>
        ))}
        {summary && (
          <ListItem
            sx={{ lineHeight: 1.25, fontWeight: 700, fontSize: "0.66rem" }}
            dense
          >
            {summary}
          </ListItem>
        )}
      </BulletList>
    </Box>
  );
};

export default Position;
