import React from 'react'
import EditStudentForm from '@/components/EditStudentForm'

interface Params {
    params : {
        id: number
    }
}

export default function StudentPage({params}:Params) {
    const {id} = params;
  return (
    <div>
        <EditStudentForm id={id}/>        
    </div>
  )
}