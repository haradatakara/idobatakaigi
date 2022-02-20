import React, { useState } from "react"
import { TextField } from "@material-ui/core"

import { pushMessage } from "../firebase";

export const MessageField = ({name, text, setText, inputEl }) => {
  const [composed, setComposed] = useState(false);
  console.log(name, text)
  return(
    <div>
      <TextField 
        autoFocus
        fullWidth={true}
        inputRef={inputEl}
        placeholder="入力"
        onChange={(e)=> setText(e.target.value)}
        onKeyDown={(e) => {
          if (composed) return;

          const text = e.target.value;
          if (text === '') return;

          if (e.key === 'Enter') {
            pushMessage({ name, text });
            setText('');
            e.preventDefault();
        }
        }}
        onCompositionStart={() => setComposed(true)}
        onCompositionEnd={() => setComposed(false)}
        value={text}
      />
    </div>
  )
}