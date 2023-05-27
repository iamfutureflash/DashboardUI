import React from 'react'
import SingleCardAmountAndTitle from './Cards/SingleCardAmountAndTitle'

function Cards() {
    return (
        <div className='flex justify-evenly bg-gray-800 rounded-2xl px-2 py-4 bg-transparent'>
            <SingleCardAmountAndTitle />
            <SingleCardAmountAndTitle />
            <SingleCardAmountAndTitle />
            <SingleCardAmountAndTitle />
            <SingleCardAmountAndTitle />
        </div>
    )
}

export default Cards