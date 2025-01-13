import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font border-t-8 border-t-white border-double">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/images/abdullah-shahid.png" alt="Abdullah Shahid" className="w-20 h-20 text-white p-2 rounded-full" />
            <span className="ml-3 text-xl text-white uppercase">Abdullah Shahid - Digital Handler</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            ©2024 CLI —
            <a href="https://www.facebook.com/abdullah.shahid.4769/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@abdullah4769</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.facebook.com/abdullah.shahid.4769/" className="text-gray-500" rel="noopener noreferrer" target="_blank">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 hover:bg-sky-500 p-2 rounded-md hover:text-white" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com/abdullah_shahid4769" className="ml-3 text-gray-500" rel="noopener noreferrer" target="_blank">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 hover:bg-pink-500 p-2 rounded-md hover:text-white" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/abdullah-shahid4769/" className="ml-3 text-gray-500" rel="noopener noreferrer" target="_blank">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-10 h-10 hover:bg-blue-700 p-2 rounded-md hover:text-white" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8 c-1.5 0-2.5 1-2.5 2.5V20h-4V10h4v2.5c0 1.5 1 2.5 2.5 2.5h0c1.5 0 2.5-1 2.5-2.5V10h4v8h-4v-8h-4z"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}