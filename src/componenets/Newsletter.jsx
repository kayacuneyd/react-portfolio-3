import React from 'react'
import Button from './Button'

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className='lg:col-span-2'>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips and tricks to optimize your flow?</h1>
                <p className="">
                    Sign up to our newsletter and stay up to date.
                </p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="p-3 mr-2 flex w-full rounded-md text-black" type="email" placeholder="Type your email..."/>
                    
                    <Button name="Notify me" />
                </div>
            
            <small>
                We care about the protection of your data. Read our <a className="text-[#00df9a]" href="/">Privacy Policy</a>.
            </small>
            </div>
      </div>
    </div>
  )
}

export default Newsletter
