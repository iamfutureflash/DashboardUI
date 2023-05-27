import React from 'react'

function SingleCardAmountAndTitle() {
    return (
        <div className='bg-slate-600 w-fit h-fit rounded-2xl px-4 py-4 flex flex-row justify-start items-center gap-2'>
            <div className='flex flex-row justify-start text-gray-400 items-center'>
                <h1 className='text-6xl font-black w-fit'>23</h1>
                <h1 className='text-6xl font-black w-fit'>K</h1>
            </div>
            <p className='text-xl font-black capitalize w-fit text-gray-400'>title</p>
        </div>
    )
}

export default SingleCardAmountAndTitle