import React from 'react'

interface  Props {
  params : {
    studentid: string;
  }
}

export default function StudentIdpage({params}: Props) {
  const {studentid} = params;
  return (
    <div>
        <div>StudentId : {studentid}
        </div>
    </div>
  )
}
