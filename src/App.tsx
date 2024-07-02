import About from "./Components/About";
import GetInTouch from "./Components/GetInTouch";
import Navbar from "./Components/Navbar";
import Numbers from "./Components/Numbers";
import Regions from "./Components/Regions";
import Regulatory from "./Components/Regulatory";
import Services from "./Components/Services";
import Latestnews from "./Components/latestnews";

export default function App() {
  return (
    <div className="flex flex-col bg-white rounded-3xl">
      <div className="flex overflow-hidden relative flex-col items-start pb-20 w-full fill-[linear-gradient(180deg,rgba(15,13,15,0.91)_0%,rgba(12,20,42,0.30)_12.49%,rgba(8,27,73,0.15)_26.85%,rgba(4,36,106,0.60)_41.53%,#002B87_53.99%)] min-h-[1998px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37b634351ed7e0acb193d6ecebf2b828ed1ac5948b6a307d6fabf309742f108a?apiKey=b5c0742263224b4db0641fab4d5d8268&"
          className="object-cover absolute inset-0 size-full "
        />
        <Navbar />
        <About />
      </div>
      <div className="flex z-10 flex-col pl-16 mt-0 w-full max-md:pl-5 max-md:max-w-full">
        <Numbers />
        <Services />
      </div>
      <Regions />
      <Latestnews />
      <Regulatory />
      <GetInTouch />
      <div className="flex flex-col items-center pt-20 pb-12 w-full max-md:max-w-full">
        <div className="flex flex-col mt-5 w-full max-w-[1609px] max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start px-px w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0868bcff7c5637eedf63989611015fc749b21c50ea1cf7943b0f516946d21adf?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                className="shrink-0 max-w-full aspect-[1.02] w-[122px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6973e3ad3d640ac5bd0d28654e69f3709b2e487392ce50a1bf37435639085351?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                className="my-auto aspect-[4] w-[221px]"
              />
            </div>
            <div className="flex flex-col self-end mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-light leading-8 text-blue-300 max-md:max-w-full">
                Company
              </div>
              <div className="flex gap-5 justify-center mt-4 text-xl leading-8 text-white capitalize max-md:flex-wrap">
                <div className="justify-center py-1">About us</div>
                <div className="justify-center py-1 whitespace-nowrap">
                  Services
                </div>
                <div className="justify-center py-1 whitespace-nowrap">
                  News
                </div>
                <div className="justify-center py-1 whitespace-nowrap">
                  Careers
                </div>
                <div className="justify-center py-1">contact us</div>
                <div className="justify-center py-1 leading-8">
                  terms <span className="">&</span> conditions
                </div>
                <div className="justify-center py-1">privacy policy</div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-4 max-w-full w-[1014px] max-md:flex-wrap">
            <div className="flex-auto text-xl font-light leading-8 text-white">
              Lorem ipsum dolor sit amet consectetur. Quis suspendisse congue id
              ac mi pretium.
            </div>
            <div className="flex gap-5 justify-between self-start mt-4">
              <div className="text-2xl font-light leading-8 text-blue-300">
                Follow Us
              </div>
              <div className="flex gap-5 justify-between my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cefa67c8d4eab726c567a98c82dc1221e7986e5b23731b53419f45e48617785?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                  className="shrink-0 self-start aspect-[0.5] w-[7px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/309647855ccb82bf01ee0bab2b1ad6ddb22ec017c4553247db642511dd308df9?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                  className="shrink-0 aspect-square w-[15px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d8ec95efb06e7083ef1c6c1cebb6d6af6ab0d7cc70510d01e102bb2b466cdd8?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                  className="shrink-0 self-start aspect-[1.08] fill-white w-[15px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/18679fadd3599e98cbb2da3adc4739ccc3dd8ade366f63e7bddf8217b1dc4889?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                  className="shrink-0 aspect-square w-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a57eb9fac12453abc1efa23b87fc503e336488a0cc17bbe1f8f3098bee24d576?apiKey=b5c0742263224b4db0641fab4d5d8268&"
          className="self-stretch mt-5 w-full aspect-[25] fill-white max-md:max-w-full"
        />
        <div className="flex gap-5 px-5 mt-12 w-full text-sm font-light tracking-widest max-w-[1778px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto leading-6 text-white">
            Copyright <span className="">@</span> 2023 Duroub Logistics. All
            Rights Reserved
          </div>
          <div className="flex-auto text-white leading-[200%]">
            Developed by Brackets Technology
          </div>
        </div>
      </div>
    </div>
  );
}
