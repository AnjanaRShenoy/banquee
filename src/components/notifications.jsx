import React from "react";

const Notifications = () => {
  return (
    <div class=" bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 className="font-semibold text-black-600 text-lg ">
                Notifications
              </h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-7xl flex flex-col ">
                <div>Stay notified</div>
              </p>
              <p class="mt-6 text-lg leading-8 text-black">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
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
                    Malesudada Ipsum
                  </dt>
                </div>
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
                    Vestibulum
                  </dt>
                </div>
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
                    Parturient Lorem
                  </dt>
                </div>
              </dl>
              <button className="text-green-500 font-bold pt-10 px-4 rounded">
                Compare cards <span>&rarr;</span>
              </button>
            </div>
          </div>
          <div>
            <div
              style={{ height: "70px", width: "500px" }}
              className="border rounded-md  bg-gray-100 flex flex-row mb-3"
            >
              <img
                style={{ height: "65px", width: "65px" }}
                className="px-2 py-2 border-none rounded-xl"
                src="https://tse3.mm.bing.net/th?id=OIP.kDp2PSIvDWKdd9XzxryjPQHaHa&pid=Api&P=0&h=180"
              />
              <div className="flex flex-col">
                <div className="mt-2 ml-1 font-medium">Banko.</div>
                <div className="ml-1 text-black">
                  You payment of 49€ has been processed
                </div>
              </div>
            </div>
            <div
              style={{ height: "70px", width: "500px" }}
              className="border rounded-md  bg-gray-100 flex flex-row mb-3"
            >
              <img
                style={{ height: "65px", width: "65px" }}
                className="px-2 py-2 border-none rounded-xl"
                src="https://tse3.mm.bing.net/th?id=OIP.kDp2PSIvDWKdd9XzxryjPQHaHa&pid=Api&P=0&h=180"
              />
              <div className="flex flex-col">
                <div className="mt-2 ml-1 font-medium">Banko.</div>
                <div className="ml-1 text-black">
                  You got a new support message!
                </div>
              </div>
            </div>
            <div
              style={{ height: "70px", width: "500px" }}
              className="border rounded-md  bg-gray-100 flex flex-row mb-3"
            >
              <img
                style={{ height: "65px", width: "65px" }}
                className="px-2 py-2 border-none rounded-xl"
                src="https://tse3.mm.bing.net/th?id=OIP.kDp2PSIvDWKdd9XzxryjPQHaHa&pid=Api&P=0&h=180"
              />
              <div className="flex flex-col">
                <div className="mt-2 ml-1 font-medium">Banko.</div>
                <div className="ml-1 text-black">You payment was declined</div>
              </div>
            </div>
            <div
              style={{ height: "70px", width: "500px" }}
              className="border rounded-md  bg-gray-100 flex flex-row mb-3"
            >
              <img
                style={{ height: "65px", width: "65px" }}
                className="px-2 py-2 border-none rounded-xl"
                src="https://tse3.mm.bing.net/th?id=OIP.kDp2PSIvDWKdd9XzxryjPQHaHa&pid=Api&P=0&h=180"
              />
              <div className="flex flex-col">
                <div className="mt-2 ml-1 font-medium">Banko.</div>
                <div className="ml-1 text-black">
                  Please verify your payment of 99€!
                </div>
              </div>
            </div>
            <div
              style={{ height: "70px", width: "500px" }}
              className="border rounded-md bg-gray-100 flex flex-row mb-3"
            >
              <img
                style={{ height: "65px", width: "65px" }}
                className="px-2 py-2 border-none rounded-xl"
                src="https://tse3.mm.bing.net/th?id=OIP.kDp2PSIvDWKdd9XzxryjPQHaHa&pid=Api&P=0&h=180"
              />
              <div className="flex flex-col">
                <div className="mt-2 ml-1 font-medium">Banko.</div>
                <div className="ml-1 text-black">
                  New account statistics are available!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
