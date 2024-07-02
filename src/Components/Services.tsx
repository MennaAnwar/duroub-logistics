import React from "react";

const Services = () => {
  return (
    <>
      <div className="flex gap-5 justify-between mt-52 w-full text-stone-950 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="text-7xl font-light leading-[79.8px] max-md:max-w-full max-md:text-4xl">
            Duroub Services
          </div>
          <div className="mt-8 text-2xl leading-8 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
            parturient phasellus aliquam. Gravida amet leo quis nam nibh.
          </div>
        </div>
        <div className="flex gap-2.5 self-end mt-36 text-2xl font-semibold capitalize max-md:mt-10">
          <div className="my-auto">All services</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6be262540d3ceaae66e3e6ca70673fd10251d0f7929c2c89187bf06399bad1?apiKey=b5c0742263224b4db0641fab4d5d8268&"
            className="shrink-0  aspect-square stroke-[1px] stroke-blue-900 w-[35px]"
          />
        </div>
      </div>
      <div className="flex overflow-x-auto gap-5 justify-between mt-24 max-md:flex-wrap max-md:mt-10">
        <div className="flex gap-1.5 max-md:flex-wrap max-md:max-w-full">
          <div className="grow px-10 pt-96 pb-10 text-4xl text-white rounded-2xl bg-stone-950 leading-[50px] w-fit max-md:px-5 max-md:pt-10 max-md:max-w-full">
            Transportation, distribution <span className="">&</span> last mile
          </div>
        </div>
        <div className="flex gap-1.5 max-md:flex-wrap max-md:max-w-full">
          <div className="grow px-10 pt-96 pb-10 text-4xl text-white rounded-2xl bg-stone-950 leading-[50px] w-fit max-md:px-5 max-md:pt-10 max-md:max-w-full">
            Warehousing multi temperature <span className="">(</span>25C to ...
          </div>
        </div>
        <div className="flex gap-1.5 max-md:flex-wrap max-md:max-w-full">
          <div className="grow px-10 pt-96 pb-10 text-4xl text-white rounded-2xl bg-stone-950 leading-[50px] w-fit max-md:px-5 max-md:pt-10 max-md:max-w-full">
            Cross border transport
          </div>
        </div>
        <div className="flex z-10 gap-1.5 max-md:flex-wrap max-md:max-w-full">
          <div className="grow px-10 pt-96 pb-10 text-4xl text-white rounded-2xl bg-stone-950 leading-[50px] w-fit max-md:px-5 max-md:pt-10 max-md:max-w-full">
            <span className="">4</span>PL <span className="">&</span> Control
            tower
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
