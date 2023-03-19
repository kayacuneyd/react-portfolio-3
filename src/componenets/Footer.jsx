import React from 'react'
import {
    FaFacebookSquare, FaGithubSquare,
    FaInstagramSquare, FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (

        <>
        
        <div className="max-w-[1240px] mx-auto py-16 px-8 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div className="">
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
                <p className='py-4'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Maxime quia saepe impedit molestias commodi provident dicta officiis! 
                    Iure porro ea repellendus in obcaecati ipsum sunt? 
                    Modi, voluptatibus accusantium. Amet, culpa.
                </p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaFacebookSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                </div>
            </div>    
            <div className="md:col-span-4 lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-gray-400">Support</h6>
                    <ul>
                        <li className="py-2 text-sm">Pricing</li>
                        <li className="py-2 text-sm">Documentation</li>
                        <li className="py-2 text-sm">Guides</li>
                        <li className="py-2 text-sm">API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-gray-400">Company</h6>
                    <ul>
                        <li className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Jobs</li>
                        <li className="py-2 text-sm">Press</li>
                        <li className="py-2 text-sm">Career</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-gray-400">Legals</h6>
                    <ul>
                        <li className="py-2 text-sm">Claim</li>
                        <li className="py-2 text-sm">Policy</li>
                        <li className="py-2 text-sm">Terms</li>
                    </ul>
                </div>
            </div>
            
            
        </div>
        <p className="text-center text-white py-2 border-t-[1px]">Copyright @ Developed by 
            <a 
                href="https://kayacuneyt.com" 
                target="_blank"
                rel="noreferrer"
            > Cüneyt Kaya. </a> All rights reserved
        </p>
        
        </>
  )
}

export default Footer
