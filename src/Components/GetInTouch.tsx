import React from "react";

const GetInTouch = () => {
  return (
    <div className="z-10 self-center mt-48 w-full max-w-[1780px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 text-2xl leading-8 text-stone-950 max-md:mt-10 max-md:max-w-full">
            <div className="text-7xl font-light leading-[79.8px] max-md:max-w-full max-md:text-4xl">
              Get in Touch
            </div>
            <div className="mt-8 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
              parturient phasellus aliquam. Gravida amet leo quis nam nibh.
            </div>
            <div className="flex gap-5 justify-between mt-16 max-md:flex-wrap max-md:mt-10">
              <div className="flex gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d768566623d0dbcc92ee56b38c43c30a8a2d95a8ca21175ffc03cd337764334?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                  className="shrink-0 w-10 aspect-square"
                />
                <div className="my-auto">
                  <span className="">+</span>966 58 168 0000
                </div>
              </div>
              <div className="flex gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/aff5eb5c3543d098fc43fb9a8fcc500e3b82e3db7ba4ae420aa6dbbe3317c055?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                  className="shrink-0 w-10 aspect-square"
                />
                <div className="my-auto">
                  Customercare<span className="">@</span>duroub.com
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8 max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/162a00f98669dc9531c1dd2c9ad9736b9a1bd1f5c6ecf06b13befb36dd19b3c5?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                className="shrink-0 self-start w-10 aspect-square"
              />
              <div className="max-md:max-w-full">
                Business park, near to Jamjoom center, Al Hamrah dist. P.O. box:
                8960, KSA. Jeddah 21<span className="">4</span>92
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow p-16 w-full text-2xl font-light leading-8 rounded-3xl bg-slate-100 text-blue-900 text-opacity-70 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">Full name</div>
            <div className="shrink-0 mt-7 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
            <div className="mt-6 max-md:max-w-full">Email</div>
            <div className="shrink-0 mt-7 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
            <div className="mt-6 max-md:max-w-full">Subject</div>
            <div className="shrink-0 mt-7 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
            <div className="mt-6 max-md:max-w-full">Your message ...</div>
            <div className="shrink-0 mt-20 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:mt-10 max-md:max-w-full" />
            <div className="flex gap-2.5 self-start mt-10 text-2xl font-semibold capitalize whitespace-nowrap text-stone-950">
              <div className="my-auto">Send</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6be262540d3ceaae66e3e6ca70673fd10251d0f7929c2c89187bf06399bad1?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                className="shrink-0 aspect-square stroke-[1px] stroke-blue-900 w-[35px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
