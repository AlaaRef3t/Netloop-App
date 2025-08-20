import React from "react";

export default function PostCardLoader() {
  return (
    <>
      <div className="bg-white rounded-lg shadow p-4 w-full max-w-xl mx-auto mt-6 animate-pulse">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded-full"></div>
        </div>

        <hr className="my-3" />


        <div className="flex justify-between items-center text-gray-600 text-sm font-medium">
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
              <div className="w-20 h-4 bg-gray-200 rounded"></div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-lg">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="w-24 h-8 bg-blue-200 rounded-lg"></div>
        </div>
      </div>
      <div className="pt-[20px] pb-[70px]">
        <div className="card bg-base-100 shadow-md p-4 max-w-xl mx-auto my-6 animate-pulse ">

          <div className="flex items-center gap-3 mb-3">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-16"></div>
            </div>
          </div>


          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>


          <div className="rounded-lg mb-4 w-full h-85 bg-gray-300"></div>


          <div className="flex gap-3">
            <div className="h-6 bg-gray-300 rounded w-12"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="h-6 bg-gray-300 rounded w-12"></div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md p-4 max-w-xl mx-auto my-6 animate-pulse ">

          <div className="flex items-center gap-3 mb-3">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-16"></div>
            </div>
          </div>


          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>


          <div className="rounded-lg mb-4 w-full h-85 bg-gray-300"></div>


          <div className="flex gap-3">
            <div className="h-6 bg-gray-300 rounded w-12"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="h-6 bg-gray-300 rounded w-12"></div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md p-4 max-w-xl mx-auto my-6 animate-pulse ">

          <div className="flex items-center gap-3 mb-3">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-16"></div>
            </div>
          </div>


          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>


          <div className="rounded-lg mb-4 w-full h-85 bg-gray-300"></div>


          <div className="flex gap-3">
            <div className="h-6 bg-gray-300 rounded w-12"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="h-6 bg-gray-300 rounded w-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}
