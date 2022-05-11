import React from 'react'
import { useParams } from 'react-router-dom'

const DisplayKeyword = () => {
    const { keyword } = useParams();
  return (
    <div>
    {isNaN(keyword)?
    <p>The word is: {keyword}</p>:
    <p>The number is: {keyword}</p>}
    </div>
  )
}

export default DisplayKeyword