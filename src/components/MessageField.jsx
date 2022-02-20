import React, { useState } from "react"
import { TextField } from "@material-ui/core"

export const MessageField = ({name, text, setText }) => {
  const [composed, setComposed] = useState(false);
  console.log(text, name='takara');
  return(
    <div>
      <TextField 
        fullWidth={true}
        placeholder="入力"
        onChange={(e)=> setText(e.target.value)}
        onKeyDown={(e) => {
          if(composed === false) {
            if(e.key === 'Enter') {
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