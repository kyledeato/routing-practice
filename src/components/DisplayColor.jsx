import React from 'react'
import { useParams } from 'react-router-dom'
const DisplayColor = () => {
    const { keyword, textColor, backgroundColor } = useParams();
  return (
    <div >
        <p style={{color:textColor,backgroundColor:backgroundColor}}>The word is: {keyword}</p>
    </div>
  )
}

export default DisplayColor