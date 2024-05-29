import React from "react";

const Blog = () => {
  return (
    <div class="bg-white py-12 sm:py-12 border">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <p className=" text-2xl font-semibold tracking-tight text-gray-900 sm:text-7xl flex flex-col ">
            <div>Blog</div>
          </p>
        </div>
        <div class="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article class="flex max-w-xl flex-col items-start justify-between">
            <img
              style={{ height: "330px", width: "360px" }}
              className="border rounded-xl"
              src="https://tse1.mm.bing.net/th?id=OIP.0rC5gHyPa1gPa3v6Kd0fDAHaE7&pid=Api&P=0&h=180"
            />

            <div class="group relative">
              <h2 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600" style={{fontSize:"28px"}}>
                <a href="#">
                  <span class="absolute inset-0"></span>
                  How To Start Using Banko For Your Startup
                </a>
              </h2>
              <p class="mt-5  text-sm leading-6 text-gray-600">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quaerat dicta magnam aspernatur sed minima. Molestias excepturi, quibusdam consequatur dolores facilis repudiandae corporis, id eaque dolore sit numquam at neque.
              </p>
            </div>
            <div class="flex items-center gap-x-4 text-xs mt-5">
              <a
                href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                Product
              </a>
              <a
                href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                Technology
              </a>
            </div>
          </article>
          <article class="flex max-w-xl flex-col items-start justify-between">
            <img
              style={{ height: "330px", width: "360px" }}
              className="border rounded-xl"
              src="https://img.freepik.com/premium-photo/young-businesswoman-white-shirt-headphones-using-smartphone-isolated-grey_213725-4.jpg"
            />

            <div class="group relative">
              <h2 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600" style={{fontSize:"28px"}}>
                <a href="#">
                  <span class="absolute inset-0"></span>
                  10 Things Nobody Told You About Banko
                </a>
              </h2>
              <p class="mt-5  text-sm leading-6 text-gray-600">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quaerat dicta magnam aspernatur sed minima. Molestias excepturi, quibusdam consequatur dolores facilis repudiandae corporis, id eaque dolore sit numquam at neque.
              </p>
            </div>
            <div class="flex items-center gap-x-4 text-xs mt-5">
              <a
                href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                Product
              </a>
              <a
                href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                Technology
              </a>
            </div>
          </article>
          <article class="flex max-w-xl flex-col items-start justify-between">
            <img
              style={{ height: "330px", width: "360px" }}
              className="border rounded-xl"
              src="https://img.freepik.com/premium-photo/close-up-male-hand-open-wallet-he-has-lot-money-us-dollar-wallet-financial-business-concept_208349-737.jpg"
            />

            <div class="group relative">
              <h2 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600" style={{fontSize:"28px"}}>
                <a href="#">
                  <span class="absolute inset-0"></span>
                  7 Ways To Improve You Saving Habits
                </a>
              </h2>
              <p class="mt-5  text-sm leading-6 text-gray-600">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quaerat dicta magnam aspernatur sed minima. Molestias excepturi, quibusdam consequatur dolores facilis repudiandae corporis, id eaque dolore sit numquam at neque.
              </p>
            </div>
            <div class="flex items-center gap-x-4 text-xs mt-5">
              <a
                href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                Product
              </a>
              <a
                href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                Technology
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
