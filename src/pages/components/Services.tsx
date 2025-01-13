import React from 'react'

function Services() {
  return (
    <div>
      <div className="flex flex-col p-10 bg-gradient-to-b from-red-700 via-stone-900 to-black">
        <h2 className="align-middle text-center text-xl md:text-4xl mb-5 uppercase font-bold shadow-black shadow-lg rounded-lg p-4 transition-all hover:scale-105 duration-500">
          Expert Services
        </h2>
        <div className="flex md:flex-row flex-col  w-full mx-3 mt-5 mb-5 md:space-x-10 justify-center justify-items-center align-middle gap-y-5">

          {/* Designing card */}
          
          <div className="flex flex-col w-full self-center md:w-1/4 bg-black rounded-3xl p-5 justify-center justify-items-center border-x-4 border-white border-solid transition-all hover:scale-105 duration-500">
            <img
              src="/images/graphics-designing.webp"
              alt=""
              className="rounded-md w-auto h-auto"
            />
            <h3 className="text-white text-center m-4 font-bold uppercase">
              Graphics Designing
            </h3>
            <p className="text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              repellendus dolorem incidunt iste culpa voluptates nobis, ut
              consectetur ipsam impedit totam quia facere illo deleniti numquam?
              Iusto nam ratione cupiditate.
            </p>
            <button className="px-4 py-2 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500 shadow-inner border-4 border-transparent border-double shadow-orange-500 rounded-lg hover:border-4 hover:border-double hover:border-orange-500 hover:from-transparent hover:via-transparent hover:to-transparent hover:font-medium hover:text-orange-500 w-full mt-4">
              Designing
            </button>
          </div>

          {/* Development card */}
         
          <div className="flex flex-col w-full self-center md:w-1/4 bg-black rounded-3xl p-5 justify-center justify-items-center border-x-4 border-white border-solid transition-all hover:scale-105 duration-500">
            <img
              src="/images/web-development.webp"
              alt=""
              className="rounded-md w-auto h-auto"
            />
            <h3 className="text-white text-center m-4 font-bold uppercase">
              Web Development
            </h3>
            <p className="text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              repellendus dolorem incidunt iste culpa voluptates nobis, ut
              consectetur ipsam impedit totam quia facere illo deleniti numquam?
              Iusto nam ratione cupiditate.
            </p>
            <button className="px-4 py-2 bg-gradient-to-b from-blue-500 via-sky-500 to-blue-500 shadow-inner border-4 border-transparent border-double shadow-blue-500 rounded-lg hover:border-4 hover:border-double hover:border-blue-500 hover:from-transparent hover:via-transparent hover:to-transparent hover:font-medium hover:text-blue-500 w-full mt-4">
              Development
            </button>
          </div>

          {/* Marketing card */}
         
          <div className="flex flex-col w-full self-center md:w-1/4 bg-black rounded-3xl p-5 justify-center justify-items-center border-x-4 border-white border-solid transition-all hover:scale-105 duration-500">
            <img
              src="/images/digital-marketing.webp"
              alt=""
              className="rounded-md w-auto h-auto"
            />
            <h3 className="text-white text-center m-4 font-bold uppercase">
              Digital Marketing
            </h3>
            <p className="text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              repellendus dolorem incidunt iste culpa voluptates nobis, ut
              consectetur ipsam impedit totam quia facere illo deleniti numquam?
              Iusto nam ratione cupiditate.
            </p>
            <button className="px-4 py-2 bg-gradient-to-b from-green-500 via-teal-500 to-green-500 shadow-inner border-4 border-transparent border-double shadow-green-500 rounded-lg hover:border-4 hover:border-double hover:border-green-500 hover:from-transparent hover:via-transparent hover:to-transparent hover:font-medium hover:text-green-500 w-full mt-4">
              Marketing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
