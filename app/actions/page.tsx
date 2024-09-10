import React from 'react'
import {getServerData} from  '@/actions/myserveractions'

export default function ActionPage() {

  return (
    <div className='flex flex-col justify-center w-1/2 mx-auto space-y-2'>
        <form action={getServerData}>
            <input type="hidden" name='my-input-name' value="data no.1" />
            <button type='submit' className='bg-blue-500 text-white'>Action By Submit</button>
        </form>

        <form>
            <input type="hidden" name='my-input-name' value="data no.2" />
            <button type='submit' formAction={getServerData} className='bg-red-500 text-white'>Action by FormAction</button>
        </form>
    </div>
  )
}