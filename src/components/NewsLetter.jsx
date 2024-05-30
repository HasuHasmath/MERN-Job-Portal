import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Looking for the perfect job? Email us to explore exciting job
          opportunities!
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none cursor-pointer bg-blue rounded-full text-white font-semibold"
          />
        </div>
      </div>

    {/* 2nd part */}
      <div className='mt-25'>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Looking for the perfect job? Email us to explore exciting job
          opportunities!
        </p>
        <div className="w-full space-y-4">
         
          <input
            type="submit"
            value={"Upload Your Resume"}
            className="w-full block py-2 pl-3 border focus:outline-none cursor-pointer bg-blue rounded-full text-white font-semibold"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter
