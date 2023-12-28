import React from 'react'

export type testProps = {
    message: string,
    person: string
}

const Onetest = (props: testProps) => {
  return (
    <div className='px-14 h-40'>
        <span>
             <p className='text-sm px-6 lg:px-32'>{`"${props.message}"`}</p>
                
            </span>
        
        <span className='flex justify-end pr-32'>
            <p>{`-${props.person}`}</p>
        </span>
        

    </div>
  )
}

export default Onetest