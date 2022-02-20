import { makeStyles } from "@material-ui/core";
import { Avatar,  Grid } from "@mui/material";
import React, { useRef, useState } from "react";

import { gravaterPath } from "../gravater";
import { ButtonField } from "./ButtonField";
import { MessageField } from "./MessageField";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px'
  }
});

const MessageInputField = ({ name }) => {
  const inputEl = useRef(null);
  const classes = useStyles();
  const [text, setText] = useState('');
  const avatarPath = gravaterPath(name);

  return( 
  <div className={classes.root}>
    <Grid container>
      <Grid item xs={1}>
        <Avatar src={avatarPath} />
      </Grid>
      <Grid item xs={10}>
        <MessageField 
          inputEl={inputEl} 
          name={name} 
          setText={setText} 
          text={text} 
        />
      </Grid>
      <Grid item xs={1}  >
        <ButtonField 
          inputEl={inputEl} 
          name={name} 
          setText={setText} 
          text={text} 
        />
      </Grid>
    </Grid>
  </div>)
}

export default MessageInputField;