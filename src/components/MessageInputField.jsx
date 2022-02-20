import { makeStyles } from "@material-ui/core";
import { Avatar,  Grid } from "@mui/material";
import React, { useState } from "react";

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
  const classes = useStyles();
  const [ text, setText] = useState('');
  const avatarPath = gravaterPath(name);

  return( 
  <div className={classes.root}>
    <Grid container>
      <Grid xs={1}>
        <Avatar src={avatarPath} />
      </Grid>
      <Grid xs={10}>
        <MessageField name={name} setText={setText} text={text} />
      </Grid>
      <Grid xs={1}  >
        <ButtonField text={text} />
      </Grid>
    </Grid>
  </div>)
}

export default MessageInputField;