import React from "react";

const Tools = () => {
  return (
    <div class=" bg-white py-24 sm:py-32 border-b">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 className="font-semibold text-black-600 text-lg ">Tools</h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-7xl flex flex-col ">
                <div>Seemless</div>
                <div>integration</div>
              </p>
              <p class="mt-6 text-lg leading-8 text-black">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis velit mollit.
                
              </p>
              
              
            </div>
          </div>
          <div>
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
                    Secure and encrypted integration
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
                    Fully API interface
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
                    Payments worldwide
                  </dt>
                </div>
              </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
