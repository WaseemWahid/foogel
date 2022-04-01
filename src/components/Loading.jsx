import React from 'react'
import  {InfinitySpin} from 'react-loader-spinner'

export const Load = () => {
    return (
        <div className="flex justify-center items-center">
            <InfinitySpin  type="puff" color="#00Bfff" height={550} width={80} />
        </div>
    )
}
