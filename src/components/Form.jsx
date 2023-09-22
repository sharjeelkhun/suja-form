import React, { Fragment, useState } from 'react'

const Form = () =>{ 
  
 return(
  <form>
      <div className="space-y-12 mx-auto max-w-5xl p-10 pb-0">
      <hr/>
            <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold lg:text-3xl leading-7 text-gray-900 text-center">Let's pass you fast. Where would you like your lessons to start?</h2>

            <div className="mt-10 grid">
                <div className="sm:col-span-3">
                <div className="mt-2">
                    <input type="text" name="first-name" placeholder="Postal Code" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
            </div>
            </div>
            
        <div className="mt-6 flex items-center justify-end gap-x-6  max-w-5xl pb-10">
            <button type="button" className="text-sm font-semibold px-4 py-4 leading-6 text-gray-900">Back</button>
            <button type="submit" className="bg-red-700 hover:bg-red-600 hover:text-white rounded-md bg-indigo-600 px-12 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Continue <span class="" aria-hidden="true">&rarr;</span></button>
        </div>


        <div class="p-4 justify-center gap-5 grid lg:grid-cols-3">
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"></path>
                        </svg>
                    </div>
                    <div class="flex-auto">
                        <a href="#" class="block font-semibold text-gray-900">100% Money Back Guarantee <span class="absolute inset-0"></span>
                        </a>
                    </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"></path>
                        </svg>
                    </div>
                    <div class="flex-auto">
                        <a href="#" class="block font-semibold text-gray-900">Learn from the best <span class="absolute inset-0"></span>
                        </a>
                    </div>
                    </div>
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"></path>
                        </svg>
                    </div>
                    <div class="flex-auto">
                <a href="#" class="block font-semibold text-gray-900">Support at every step <span class="absolute inset-0"></span> </a>
                    </div>
                    </div>
        </div> 

    </div>

    </form>  
    )};
  
    export default Form;