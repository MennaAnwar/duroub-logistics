import React from "react";

const About = () => {
  return (
    <>
      {" "}
      <div className="flex overflow-hidden relative flex-col items-start self-end px-9 pb-11 mt-11 mr-9 aspect-square stroke-[2.05px] stroke-blue-300 w-[72px] max-md:pl-5 max-md:mt-10 max-md:mr-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/12d0599aee7e68df4d586a9882b012ec12db8f38fa6da94f77ebe22491e18a8e?apiKey=b5c0742263224b4db0641fab4d5d8268&"
          className="object-cover absolute inset-0 size-full"
        />
      </div>
      <div className="relative mt-16 ml-40 text-7xl font-light text-white leading-[79.8px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        About Duroub Logistics
      </div>
      <div className="relative mt-8 ml-40 text-2xl leading-8 text-white w-[711px] max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
        parturient phasellus aliquam. Gravida amet leo quis nam nibh. Sed urna
        commodo urna bibendum nulla cras tellus. Sit lacus dictum porttitor
        tellus sed fames arcu velit. Quam leo proin ipsum molestie. Nibh magna
        porttitor ac ipsum blandit eget vestibulum.
      </div>
      <div className="flex relative gap-2.5 pr-20 mt-16 mb-56 ml-40 text-2xl font-semibold text-white capitalize max-md:flex-wrap max-md:pr-5 max-md:my-10">
        <div className="my-auto">explore more</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8f4b655653af5c781729e198c57e0350e470c42f0182028d6c3d420b94b5e6c?apiKey=b5c0742263224b4db0641fab4d5d8268&"
          className="shrink-0 aspect-square stroke-[1px] stroke-blue-300 w-[35px]"
        />
      </div>
    </>
  );
};

export default About;
