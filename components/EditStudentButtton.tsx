import React from 'react'
import Link from 'next/link'

interface Props {
    id: number;
}

export default function EditStudentButtton({id}:Props) {

  return (
    <div className='text-blue-600'>
        <Link href={`/student/${id}`}>Edit</Link>
    </div>
  )
}
