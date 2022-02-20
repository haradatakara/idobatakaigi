import React, { useRef } from "react";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";

import { gravaterPath } from "../gravater";
import { useEffect } from "react";

export const MessageItem = ({ name, text, isLastItem }) => {
  const ref = useRef(null);
  const avatarPath = gravaterPath(name);

  useEffect(() => {
    if(isLastItem) {
      ref.current.scrollIntoView({ behavior: 'smooth'});
    }
  }, [isLastItem]);
  return (
    <ListItem divider={true} ref={ref}>
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
        style={{color: "text.primary"}} 
      >
        {text}
      </Typography>
      }
    />
  </ListItem>   
  )
}