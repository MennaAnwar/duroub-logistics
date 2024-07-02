import React from "react";
import HeroSection from "./HeroSection";

const Navbar = () => {
  return (
    <div className="mix-blend-multiply flex overflow-hidden relative flex-col items-start self-stretch px-16 pt-14 pb-6 w-full min-h-[1080px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/69195df8c4b5c5afd3eab8fec89edc938267dd8563ea45b73d3632457de6c04a?apiKey=b5c0742263224b4db0641fab4d5d8268&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/69195df8c4b5c5afd3eab8fec89edc938267dd8563ea45b73d3632457de6c04a?apiKey=b5c0742263224b4db0641fab4d5d8268&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69195df8c4b5c5afd3eab8fec89edc938267dd8563ea45b73d3632457de6c04a?apiKey=b5c0742263224b4db0641fab4d5d8268&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/69195df8c4b5c5afd3eab8fec89edc938267dd8563ea45b73d3632457de6c04a?apiKey=b5c0742263224b4db0641fab4d5d8268&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/69195df8c4b5c5afd3eab8fec89edc938267dd8563ea45b73d3632457de6c04a?apiKey=b5c0742263224b4db0641fab4d5d8268&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69195df8c4b5c5afd3eab8fec89edc938267dd8563ea45b73d3632457de6c04a?apiKey=b5c0742263224b4db0641fab4d5d8268&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/69195df8c4b5c5afd3eab8fec89edc938267dd8563ea45b73d3632457de6c04a?apiKey=b5c0742263224b4db0641fab4d5d8268&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/69195df8c4b5c5afd3eab8fec89edc938267dd8563ea45b73d3632457de6c04a?apiKey=b5c0742263224b4db0641fab4d5d8268&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative gap-5 justify-between items-center self-stretch w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 self-stretch">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ab821c7a45c97f58e9432def08b151584ce8434972973feda4669e3edad6c49?apiKey=b5c0742263224b4db0641fab4d5d8268&"
            className="shrink-0 aspect-[1.02] w-[93px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/89c3fc706a430608c5261ce2e584e90c363505582b32aaa1a5ef3938f2f34b7b?apiKey=b5c0742263224b4db0641fab4d5d8268&"
            className="shrink-0 my-auto max-w-full aspect-[4] w-[170px]"
          />
        </div>
        <div className="flex gap-5 justify-center self-stretch my-auto text-2xl text-white capitalize max-md:flex-wrap">
          <div className="justify-center py-1">About us</div>
          <div className="justify-center py-1 whitespace-nowrap">Services</div>
          <div className="justify-center py-1 whitespace-nowrap">News</div>
          <div className="justify-center py-1 whitespace-nowrap">Careers</div>
          <div className="justify-center py-1">contact us</div>
        </div>
        <div className="flex gap-3 self-stretch my-auto text-lg capitalize whitespace-nowrap border border-blue-300 border-solid rounded-[37px]">
          <div className="flex overflow-hidden relative flex-col justify-center px-4 py-3 font-semibold text-blue-900 border-2 border-blue-300 border-solid aspect-[1.4] fill-blue-300 stroke-[2px] stroke-blue-300">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4f3cb98d6654a464827fa68e03ec5e9d27c1e4b1537788e734e7e64b81f8d59?apiKey=b5c0742263224b4db0641fab4d5d8268&"
              className="object-cover absolute inset-0 size-full"
            />
            En
          </div>
          <div className="my-auto font-light text-white">ع</div>
        </div>
      </div>
      <HeroSection />
    </div>
  );
};

export default Navbar;
