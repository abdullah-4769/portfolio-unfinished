import React from 'react';

export default function CTA() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative bg-gradient-to-b from-red-700 via-stone-900 to-black">

        {/* Map Element */}

        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              style={{
                filter: 'contrast(0.8) ',
              }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md ">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1 ">Shah Faisal Colony No-5, Karachi</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-red-500 leading-relaxed ">as476911880@gmail.com</a>
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed ">+92 318 2496393</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}


          <div className="lg:w-1/3 md:w-1/2 bg-gradient-to-b from-black via-black to-red-700 border-4 shadow-md shadow-red-600 flex flex-col md:ml-auto w-full md:py-8 px-6 mt-8 md:mt-0 rounded-lg p-5">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Form</h2>
            <hr className='md:hidden border-[2px] mb-2 rounded-full'/>
            <p className="leading-relaxed mb-5 text-white"> You can contact us here if you have any query or any project to complete on!</p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-red-950 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}