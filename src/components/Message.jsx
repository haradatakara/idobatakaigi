import React from "react";
import { makeStyles } from "@material-ui/core";
import { messagesRef } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  }
})

const Message = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();
  console.log(messages);
  useEffect(() => {
    messagesRef
    .orderByKey()
    .limitToLast(3)
    .on('value', (snapshot) => {
    const messages = snapshot.val();
    if (messages === null) return;

    const entries = Object.entries(messages);
    const newMessages = entries.map((entry) => {
      const key = entry[0];
      const nameAndText = entry[1];
      return { key: key, ...nameAndText};
    })
    setMessages(newMessages);
  })
  }, []);

  
  return <div className={classes.root}>MessageList</div>
}

export default Message;