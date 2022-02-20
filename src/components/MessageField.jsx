import React, { useState } from "react"
import { TextField } from "@material-ui/core"

import { pushMessage } from "../firebase";

export const MessageField = ({name, text, setText }) => {
  const [composed, setComposed] = useState(false);
  
  return(
    <div>
      <TextField 
        fullWidth={true}
        placeholder="入力"
        onChange={(e)=> setText(e.target.value)}
        onKeyDown={(e) => {
          if(composed === false) {
            if(e.key === 'Enter') {
              pushMessage({ name: 'Takara', text });
              setText('');
              e.preventDefault();
            }
          }
        }}
        onCompositionStart={() => setComposed(true)}
        onCompositionEnd={() => setComposed(false)}
      />
    </div>
  )
}