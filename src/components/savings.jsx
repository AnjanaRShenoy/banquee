import React from "react";

const Savings = () => {
  return (
    <div class="bg-white py-12 sm:py-12  mt-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-semibold text-black-600 text-lg ">
            Saving Accounts
          </h2>
          <p className=" text-2xl font-semibold tracking-tight text-gray-900 sm:text-7xl flex flex-col ">
            <div>Organize your </div>
            <div>money the right way</div>
          </p>
          <p class="mt-6 text-lg leading-8 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>
        <div class="mx-auto  grid max-w-sm grid-cols-1 gap-x-8 gap-y-16  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <article class="flex max-w-sm flex-col items-start">
            <div
              className="border rounded-xl bg-green-200 mr-5"
              style={{
                height: "200px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "130px", width: "160px" }}
                src="https://t3.ftcdn.net/jpg/02/49/82/50/360_F_249825007_f5dzNTBuUZoV5nERUWTlPDoU3cvLIBzn.jpg"
              />
            </div>
            <div className="mt-5"> New Laptop</div>
            <div className="text-gray-400"> 400$</div>
          </article>

          <article class="flex max-w-sm flex-col items-start mr-5">
            <div
              className="border rounded-xl bg-green-200"
              style={{
                height: "200px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "130px", width: "160px" }}
                src="https://www.shutterstock.com/image-vector/bike-icon-vector-logo-template-600nw-1388480312.jpg"
              />
            </div>
            <div className="mt-5"> Dream bike</div>
            <div className="text-gray-400"> 200$</div>
          </article>

          <article class="flex max-w-sm flex-col items-start mr-5">
            <div
              className="border rounded-xl bg-green-200"
              style={{
                height: "200px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "130px", width: "160px" }}
                src="https://www.shutterstock.com/image-vector/airplane-icon-vector-transportation-logo-600nw-1283834365.jpg"
              />
            </div>
            <div className="mt-5"> Holiday</div>
            <div className="text-gray-400"> 14000$</div>
          </article>

          <article class="flex max-w-sm flex-col items-start mr-5">
            <div
              className="border rounded-xl bg-green-200"
              style={{
                height: "200px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "130px", width: "160px" }}
                src="https://static.vecteezy.com/system/resources/previews/006/998/434/non_2x/photo-camera-icons-photo-camera-icon-design-illustration-photo-camera-simple-sign-photo-camera-logo-vector.jpg"
              />
            </div>
            <div className="mt-5"> Camera</div>
            <div className="text-gray-400"> 100$</div>
          </article>

          <article class="flex max-w-sm flex-col items-start mr-5">
            <div
              className="border rounded-xl bg-green-200"
              style={{
                height: "200px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "130px", width: "160px" }}
                src="https://pngimg.com/d/plus_PNG40.png"
              />
            </div>
            
          </article>

          
        </div>
      </div>
    </div>
  );
};

export default Savings;
