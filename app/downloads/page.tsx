'use client'
import React from 'react'
// import { useSession } from 'next-auth/react'
// import Link from 'next/link'
// import { ImInsertTemplate } from 'react-icons/im';

// export default async function DownloadPage() {
//   const {data, status} = useSession();

//   if(status === 'loading'){
//     <div>Loading...</div>    
//   }

//   if(status === 'unauthenticated'){
//   return(
//     <div>
//       <div>Please Sign In</div>
//     </div>
//   )
//   }

//   if(status === 'authenticated'){
//     const downloadList = [
//       {title: 'javascript', link: 'https:www.thinkbeyondbook.com'},
//       {title: 'typescript', link: 'https:www.thinkbeyondbook.com'},
//       {title: 'tailwindcss', link: 'https:www.thinkbeyondbook.com'},
//       {title: 'nextjs', link: 'https:www.thinkbeyondbook.com'},
//     ]

//     return (
//       <div>
//         <div>
//           <div>Download Program</div>
//         </div>

//         <div>
//           {
//             downloadList.map((item,index) =>
//             {
//               return <Link
//               key={index}
//               href={item.link}
//               >{item.link}</Link>
//             })
//           }
//         </div>
//       </div>
//     )
//   }
// }

export default function DownloadPage() {
  return <div>Donwload</div>
}