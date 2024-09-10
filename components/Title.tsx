import React from 'react'

interface Text {
    text :string;
}

function Title({text}:Text) {
  return (
    <div className='text-2xl text-gray-500 my-4'>
        {text}
    </div>
  )
}

export default Title