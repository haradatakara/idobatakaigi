import { IconButton } from "@mui/material";
import React from "react";
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from "../firebase";
export const ButtonField = ({name, setText, text}) => {
  return(
    <IconButton 
      disabled={text === ''}
      onClick={() => {
        pushMessage({name: 'Takara', text});
        setText('');
      }}
    >
      <SendIcon />
    </IconButton>
  )
}