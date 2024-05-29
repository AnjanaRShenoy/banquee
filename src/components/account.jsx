import React from "react";

const Account = () => {
  return (
    <div className="bg-white pt-24 sm:pt-25">
      <div className="bg-green-50 flex justify-center items-center">
        <div className="mx-auto max-w-10xl px-10 lg:px-12 py-24 sm:py-25">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4 flex justify-center items-center">
              <div className="lg:max-w-lg ">
                <h2 className="font-semibold text-black-600 text-lg flex justify-center items-center">
                  Account
                </h2>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl flex flex-col justify-center items-center">
                  <div>Perfect card</div>
                  <div>for your needs</div>
                </p>
                <p className="mt-6 text-lg text-black-600 text-bold font-medium pb-6">
                  <div className="flex flex-col justify-center items-center">
                    <div>Senectus et netus et malesuada fames ac turpis.</div>
                  </div>
                  <div className="flex justify-center items-center">
                    Sagittis vitae et leo duis ut diam.
                  </div>
                </p>
                <div
                  className="flex justify-around items-center bg-green-600"
                  style={{
                    height: "60px",
                    width: "300px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <div className="text-white">banquee.</div>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src="https://cdn.vectorstock.com/i/500p/80/06/wifi-signal-icon-vector-30338006.jpg"
                  />
                </div>
                <div
                  className="flex justify-around items-center bg-gray-700"
                  style={{
                    height: "60px",
                    width: "300px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <div className="text-white">banquee.</div>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src="https://cdn.vectorstock.com/i/500p/80/06/wifi-signal-icon-vector-30338006.jpg"
                  />
                </div>
                <div
                  className="flex flex-col justify-around items-center bg-yellow-600 rounded-lg gap-6"
                  style={{ height: "180px", width: "300px" }}
                >
                  <div className="flex flex-row ">
                    <div className="text-white">banquee.</div>
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src="https://cdn.vectorstock.com/i/500p/80/06/wifi-signal-icon-vector-30338006.jpg"
                    />
                  </div>
                  <div className="text-white">1234 5678 9000 0000</div>
                  <div className="flex flex-row gap-5">
                    <div className="text-white">John Doe</div>
                    <div className="text-white">09/28</div>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Open Account
                  </button>
                  <button className="border-2 text-black hover:text-green-700 font-bold py-2 px-4 rounded ml-6">
                    Compare Cards
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
