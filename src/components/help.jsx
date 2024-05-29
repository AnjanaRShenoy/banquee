import React from "react";

const Help = () => {
  return (
    <div class=" bg-white py-24 sm:py-22">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl flex flex-col pb-10">
                <div>Need help?</div>
              </p>

              <div class="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/755/264/non_2x/call-answer-icon-symbol-green-call-icon-symbol-for-web-app-logo-vector.jpg"
                  alt=""
                  class="h-10 w-10 rounded-full bg-gray-50"
                />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      +49 176 123 456
                    </a>
                  </p>
                  <p class="text-gray-600">Support Hotline</p>
                </div>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://w7.pngwing.com/pngs/198/585/png-transparent-chatbox-icon-computer-icons-message-sms-icon-message-miscellaneous-grass-online-chat-thumbnail.png"
                  alt=""
                  class="h-10 w-10 rounded-full bg-gray-50"
                />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      help@banquee.com
                    </a>
                  </p>
                  <p class="text-gray-600">Support Email</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-row justify-between border-b p-5">
              <div>How do I open an Banko account?</div>
              <div>+</div>
            </div>
            <div className="flex flex-row justify-between border-b p-5">
              <div>How do I order a new card?</div>
              <div>+</div>
            </div>
            <div className="flex flex-row justify-between border-b p-5">
              <div>How do I change my account limits?</div>
              <div>+</div>
            </div>
            <div className="flex flex-col justify-between border-b p-5">
            <div className="flex flex-row justify-between ">
              <div>How does Banko premium works?</div>
              <div>×</div>
              
            </div>
            <div className="text-gray-600 mt-3 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique voluptatibus reprehenderit optio ex corporis pariatur? Exercitationem laudantium quasi consectetur harum ratione consequuntur debitis fugit molestias pariatur voluptatem dicta, magni mollitia.</div>
            </div>
            <div className="flex flex-row justify-between border-b p-5">
              <div>How do I open an Banko account?</div>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
