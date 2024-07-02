import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="relative mt-96 text-8xl font-light text-white leading-[90px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Lorem ipsum dolor
      </div>
      <div className="relative mt-8 text-2xl leading-8 text-white w-[790px] max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Et ultrices auctor tempor
        <br />
        urna lectus diam pretium.
      </div>
      <div className="flex relative gap-2.5 pr-20 mt-16 text-2xl font-semibold text-white capitalize max-md:flex-wrap max-md:pr-5 max-md:mt-10">
        <div className="my-auto">Discover more</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8f4b655653af5c781729e198c57e0350e470c42f0182028d6c3d420b94b5e6c?apiKey=b5c0742263224b4db0641fab4d5d8268&"
          className="shrink-0 border border-blue-300 border-solid aspect-square stroke-[1px] stroke-blue-300 w-[35px]"
        />
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7876f40312987d5ed18c0c25b29e4acd3f5cb074d2541bea3e3080e563567328?apiKey=b5c0742263224b4db0641fab4d5d8268&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7876f40312987d5ed18c0c25b29e4acd3f5cb074d2541bea3e3080e563567328?apiKey=b5c0742263224b4db0641fab4d5d8268&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7876f40312987d5ed18c0c25b29e4acd3f5cb074d2541bea3e3080e563567328?apiKey=b5c0742263224b4db0641fab4d5d8268&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7876f40312987d5ed18c0c25b29e4acd3f5cb074d2541bea3e3080e563567328?apiKey=b5c0742263224b4db0641fab4d5d8268&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7876f40312987d5ed18c0c25b29e4acd3f5cb074d2541bea3e3080e563567328?apiKey=b5c0742263224b4db0641fab4d5d8268&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7876f40312987d5ed18c0c25b29e4acd3f5cb074d2541bea3e3080e563567328?apiKey=b5c0742263224b4db0641fab4d5d8268&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7876f40312987d5ed18c0c25b29e4acd3f5cb074d2541bea3e3080e563567328?apiKey=b5c0742263224b4db0641fab4d5d8268&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7876f40312987d5ed18c0c25b29e4acd3f5cb074d2541bea3e3080e563567328?apiKey=b5c0742263224b4db0641fab4d5d8268&"
        className="self-center mt-28 aspect-square w-[75px] max-md:mt-10"
      />
    </>
  );
};

export default HeroSection;
