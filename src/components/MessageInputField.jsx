import { makeStyles } from "@material-ui/core";
import { Avatar, Grid } from "@mui/material";
import React from "react";

import { gravaterPath } from "../gravater";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px'
  }
});

const MessageInputField = ({ name }) => {
  const classes = useStyles();
  const avatarPath = gravaterPath(name);
  return( 
  <div className={classes.root}>
    <Grid container>
      <Grid xs={1}>
        <Avatar src={avatarPath} />
      </Grid>
      <Grid xs={10}>入力</Grid>
      <Grid xs={1} >ボタン</Grid>
    </Grid>
  </div>)
}

export default MessageInputField;