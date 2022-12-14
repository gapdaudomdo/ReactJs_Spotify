import React from 'react'

export default function DetailSong() {
  return (
    <div className='col-span-1'>
    <h2 className='text-cyan-500 front-bold'> Now playing</h2>
    <h2 className='text-gray-800 text-2xl'> Sing me to sleep</h2>
    <div className='w-[240px] m-auto mt-10'>
        <img className='w-full' src='https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576' alt='avatar'/>
    </div>
    <div className='flex justify-evenly items-center mt-5'>
        <img className='w-[80px] rounded-full' src='https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576' alt='avatar'/>
    <span className='text-xl text-white'>Do Gia Huy</span>
    </div>
    </div>
  )
}
