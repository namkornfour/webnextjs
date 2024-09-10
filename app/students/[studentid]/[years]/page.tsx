import React from 'react'

interface Props {
    params: {
        studentid: string;
        years: string;        
    }
}

export default function StudentYearPage({params} : Props) {
    const {studentid, years} = params;
    
  return (
    <div className='flex flex-col w-1/2 justify-center mx-auto'>
        <div className='text-center'>StudentId : {studentid}</div>
        <div className='text-center'>Years : {years}</div>           
    </div>
  )
}