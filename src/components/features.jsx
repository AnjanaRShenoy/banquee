import React from "react";

const Features = () => {
  return (
    <div className="bg-white pt-24 sm:pt-25">
    <div className="bg-green-50 flex justify-center items-center">
      <div className="mx-auto max-w-10xl px-10 lg:px-12 py-24 sm:py-25">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="lg:pr-8 lg:pt-4 flex justify-center items-center">
            <div className="lg:max-w-lg ">
              <h2 className="font-semibold text-black-600 text-lg flex justify-center items-center">
                Features
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl flex justify-center items-center">
                All in one card.
              </p>
              <p className="mt-6 text-lg text-black-600 text-bold font-medium pb-6">
                <div className="flex justify-center items-center">
                  Senectus et netus et malesuada fames ac turpis.
                </div>
                <div className="flex justify-center items-center">
                  Sagittis vitae et leo duis ut diam.
                </div>
              </p>
              <div className="flex justify-center items-center">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Open Account
                </button>
                <button className="text-green-500 font-bold py-2 px-4 rounded">
                  Compare cards <span>&rarr;</span>
                </button>
            </div>
              {/* <div className="flex flex-row gap-8 pt-7 pb-0 justify-center">
                <div className="border rounded p-4 mb-4" style={{ height: "150px", width: "500px" }}>hi</div>
                <div className="border rounded p-4 mb-4" style={{ height: "150px", width: "500px" }}>hi</div>
                <div className="border rounded p-4 mb-4" style={{ height: "150px", width: "500px" }}>hi</div>
                <div className="border rounded p-4 mb-4" style={{ height: "150px", width: "500px" }}>hi</div>
                <div className="border rounded p-4 mb-4" style={{ height: "150px", width: "500px" }}>hi</div>
              </div> */}
          </div>
              </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Features;
