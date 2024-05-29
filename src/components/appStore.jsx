import React from "react";

const AppStore = () => {
  return (
    <div class=" bg-white py-24 sm:py-22">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 bg-green-300 pt-20 pl-10 rounded-xl">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl flex flex-col pb-10">
                <div>One app.</div>
                <div>One banking.</div>
              </p>
              <p class="mt-3 text-lg leading-8 text-black">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis velit mollit.
              </p>
              <dl class="mt-3 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="flex flex-row">
                  <div class="relative pl-9">
                    <dt class="inline text-lg text-black">
                      <svg
                        class="absolute left-1 top-1 h-5 w-5 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.285 6.291l-11.63 11.63-4.285-4.285 1.415-1.415 2.87 2.87 10.215-10.215z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Instant transactions
                    </dt>
                  </div>
                  <div class="relative pl-9 ml-10">
                    <dt class="inline text-lg text-black">
                      <svg
                        class="absolute left-1 top-1 h-5 w-5 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.285 6.291l-11.63 11.63-4.285-4.285 1.415-1.415 2.87 2.87 10.215-10.215z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Payments worldwide
                    </dt>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div class="relative pl-9">
                    <dt class="inline text-lg text-black">
                      <svg
                        class="absolute left-1 top-1 h-5 w-5 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.285 6.291l-11.63 11.63-4.285-4.285 1.415-1.415 2.87 2.87 10.215-10.215z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Saving accounts
                    </dt>
                  </div>
                  <div class="relative pl-9 ml-10">
                    <dt class="inline text-lg text-black">
                      <svg
                        class="absolute left-1 top-1 h-5 w-5 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.285 6.291l-11.63 11.63-4.285-4.285 1.415-1.415 2.87 2.87 10.215-10.215z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      100% mobile banking
                    </dt>
                  </div>
                </div>
              </dl>
              <div className="flex flex-row gap-3">
                <img
                  style={{ height: "40px", width: "140px" }}
                  className="mt-10"
                  src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg"
                />
                <img
                  style={{ height: "40px", width: "140px" }}
                  className="mt-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
                />
              </div>
            </div>
          </div>
          <div
            className="border-8 border-black  p-4 bg-white "
            style={{
              height: "550px",
              width: "400px",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              borderBottom: "none",
            }}
          >
            <div className="flex flex-row justify-between items-center">
              <p className="mt-4">Current balance</p>
              <p className="mt-4 text-xl font-semibold text-gray-900 sm:text-md flex flex-col">
                {" "}
                $4.658,50
              </p>
            </div>
            <div
              className="flex flex-col justify-around items-center bg-gray-600 rounded-lg gap-6 mt-3"
              style={{ height: "200px", width: "350px" }}
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
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://cdn.vectorstock.com/i/500p/47/65/fast-send-money-transfer-funds-payment-icon-vector-31494765.jpg"
                alt=""
                class="h-10 w-10 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Send Money
                  </a>
                </p>
              </div>
              <img
                src="https://cdn.vectorstock.com/i/500p/47/65/fast-send-money-transfer-funds-payment-icon-vector-31494765.jpg"
                alt=""
                class="h-10 w-10 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Receive Money
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between m-4">
                <div>Transactions</div>
                <div>View all </div>
            </div>

            <div
              style={{ height: "70px", width: "350px" }}
              className="border rounded-md bg-white flex flex-row mb-3"
            >
              <div className="flex flex-row justify-between items-center w-full">
                <img
                  style={{ height: "65px", width: "65px" }}
                  className="px-2 py-2 border-none rounded-xl"
                  src="https://tse2.mm.bing.net/th?id=OIP.bBpje0aw3Afdv-izr3AV3wHaHa&pid=Api&P=0&h=180"
                />
                <div className="flex flex-col">
                  <div className="mt-2 ml-1">Apple</div>
                  <div className="ml-1 text-gray-600">Electronics</div>
                </div>
                <div className="ml-auto text-green-600 pr-4">-799€</div>
              </div>
            </div>
            <div
              style={{ height: "70px", width: "350px" }}
              className="border rounded-md bg-white flex flex-row mb-3"
            >
              <div className="flex flex-row justify-between items-center w-full">
                <img
                  style={{ height: "65px", width: "65px" }}
                  className="px-2 py-2 border-none rounded-xl"
                  src="https://tse2.mm.bing.net/th?id=OIP.bBpje0aw3Afdv-izr3AV3wHaHa&pid=Api&P=0&h=180"
                />
                <div className="flex flex-col">
                  <div className="mt-2 ml-1">Apple</div>
                  <div className="ml-1 text-gray-600">Electronics</div>
                </div>
                <div className="ml-auto text-green-600 pr-4">-799€</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
