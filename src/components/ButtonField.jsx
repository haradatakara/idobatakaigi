import { Button } from "@mui/material";
import React from "react";
// import { useState } from "react";

export const ButtonField = ({ text}) => {
  // const [ disabled, setDisabled] = useState(true);
  // setDisabled();
  console.log(text)
  return(
    <Button 
      variant="contained"
      disabled={text.length === 0 ? true : false}
    >
      追加
    </Button>
  )
}