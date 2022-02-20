import React from "react";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";

import { gravaterPath } from "../gravater";

export const MessageItem = ({ name, text }) => {
  const avatarPath = gravaterPath(name);
  return (
    <ListItem divider={true}>
    <ListItemAvatar>
      <Avatar src={avatarPath} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="body2"
        color="text.primary"
      >
        {text}
      </Typography>
      }
    />
  </ListItem>   
  )
}