import React from 'react'
import Textarea from '@mui/joy/Textarea';

const TextArea = ({placeholder}) => {
  return (
    <div>
      <Textarea placeholder={placeholder} minRows={3} />
    </div>
  )
}

export default TextArea;