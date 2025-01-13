import React from 'react'

function Features() {
  return (
    <div>
      <div className="flex flex-row w-full justify-center items-center bg-gradient-to-t from-red-700 via-stone-900 to-black">
        <div className="flex flex-col items-center w-3/4 rounded-xl mt-28 mb-28 p-12 bg-no-repeat bg-cover bg-buttom shadow-lg border-2 border-solid border-red-500 md:border-white shadow-red-600">
          
            <h2 className=" text-xl md:text-2xl font-bold md:m-4 uppercase underline decoration-double mb-8 md:shadow-md md:shadow-white w-full text-center md:p-10  rounded-lg">
              Wanna Know About me? Read Below ⤵️
            </h2>
          
          
            <p className=''>
              I am a WordPress designer, graphics designer, digital advertiser,
              and marketer with four years of experience, specializing in SEO.
              My skills include:
              <br />
              <br />
            </p>
            <hr />
            <ul>
              <li className="list-disc list-inside under">
                Custom WordPress website design and development
              </li>
              <li className="list-disc list-inside">
                Crafting visually appealing graphics for digital campaigns
              </li>
              <li className="list-disc list-inside">
                Strategic digital advertising across platforms
              </li>
              <li className="list-disc list-inside">
                SEO optimization for websites and digital content
              </li>
            </ul>{" "}
            <hr />
            <br />
            <p>
              I offer comprehensive solutions to elevate brands and drive
              business growth.
            </p>
          
        </div>
      </div>
    </div>
  )
}

export default Features
