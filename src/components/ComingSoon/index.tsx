import React from 'react'
import { ComingSoonImage } from '../../assets'

const ComingSoon = () => {
  return (
    <div className='w-screen h-screen p-10 flex justify-center items-center'>
        <div className="flex flex-col items-center md:w-96">
            <img alt="coming-soon" src={ComingSoonImage} />
            <div className="flex items-center gap-1 pt-10">
                <h1 className='text-2xl font-bold'>Coming</h1>
                <h1 className='text-2xl font-bold text-[#0091C0]'>Soon</h1>
            </div>
        </div>
    </div>
  )
}

export default ComingSoon