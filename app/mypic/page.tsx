import React from 'react'
import Image from 'next/image'
import book from './meeting.jpg'

export default function page() {

  return (
    <div className='relative w-full h-screen'>
        {/* <Image src='/meeting.jpg'
        alt='Meeting'
        layout='fill'
        objectFit='cover'
        className='absolute left-0 top-0'
        /> */}

        <Image src={book} alt="My meeting" className='absolute left-0 top-0' layout='fill' objectFit='cover' />
    </div>
  )
}
