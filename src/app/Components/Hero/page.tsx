import React from "react";

function HeroSection() {
  return (
    <main className="bg-gray-400 h-full">
      <div className="flex flex-wrap justify-center gap-8 p-10">
   
        <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto bg-slate-200 shadow-2xl rounded-lg overflow-hidden p-2">
          <div className="h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/th (7).jpeg"
              alt="Product Image"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Cotton Printed T-Shirt
            </h3>
            <p className="text-lg text-gray-600 my-2">Rs: $50.00</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>

     
        <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto bg-slate-200 shadow-2xl rounded-lg overflow-hidden p-2">
          <div className="h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/th (8).jpeg"
              alt="Product Image"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Cotton Printed T-Shirt
            </h3>
            <p className="text-lg text-gray-600 my-2">Rs: $99.00</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto bg-slate-200 shadow-2xl rounded-lg overflow-hidden p-2">
          <div className="h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/th (44).jpeg"
              alt="Product Image"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Cotton Printed T-Shirt
            </h3>
            <p className="text-lg text-gray-600 my-2">Rs: $89.00</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
