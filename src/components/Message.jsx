import React from "react";
import { List, makeStyles } from "@material-ui/core";
import { messagesRef } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";
import { MessageItem } from "./MessageItem";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: '100%',
    overflow: 'auto'
  }
})

const Message = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();
  console.log(messages);
  useEffect(() => {
    messagesRef
    .orderByKey()
    .limitToLast(5)
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

  
  return( 
    <List className={classes.root}>
      {
        messages.map(({key, name, text}) => {
          return <MessageItem key={key} name={name} text={text}>Item</MessageItem>
        })
      }

    </List>
  )
}

export default Message;