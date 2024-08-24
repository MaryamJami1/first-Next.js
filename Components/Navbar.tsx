import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <>
    <div className='bg-red-300 text-black h-20 flex font-bold justify-between p-6 '>
        <h1 className='text-xl'>Logo</h1>
        <div>
            <ul className='flex gap-6 text-lg'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/About">About</Link>
                </li>
                <li>
                    <Link href="/Skills">Skills</Link>
                </li>
                <li>
                    <Link href="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div>

    </>
  )
}

