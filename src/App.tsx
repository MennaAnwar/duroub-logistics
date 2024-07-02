import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Numbers from "./Components/Numbers";
import Regions from "./Components/Regions";
import Services from "./Components/Services";

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
      <div className="flex gap-5 justify-between self-center mt-52 w-full max-w-[1777px] text-stone-950 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col px-5 max-md:max-w-full">
          <div className="text-7xl font-light leading-[79.8px] max-md:max-w-full max-md:text-4xl">
            Latest News
          </div>
          <div className="mt-8 text-2xl leading-8 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
            parturient phasellus aliquam. Gravida amet leo quis nam nibh.
          </div>
        </div>
        <div className="flex gap-2.5 self-end px-5 mt-36 text-2xl font-semibold capitalize max-md:mt-10">
          <div className="my-auto">All news</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6be262540d3ceaae66e3e6ca70673fd10251d0f7929c2c89187bf06399bad1?apiKey=b5c0742263224b4db0641fab4d5d8268&"
            className="shrink-0 border border-blue-900 border-solid aspect-square stroke-[1px] stroke-blue-900 w-[35px]"
          />
        </div>
      </div>
      <div className="self-center mt-24 w-full max-w-[1777px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-start px-12 py-12 rounded-2xl bg-stone-950 max-md:px-5 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-center items-start px-5 py-4 max-w-full text-lg leading-7 aspect-[3.21] w-[154px] max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b75e2105dce03a473cd02b80c90599a3ffc62e49a026a30841e3c673c47ff65f?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  09 May 2023
                </div>
                <div className="mt-80 text-3xl leading-10 max-md:mt-10 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur lacus auctor amet
                  varius in ...
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2 p-6 rounded-2xl bg-slate-100 max-md:flex-wrap max-md:px-5">
                <div className="flex flex-col flex-1 max-md:max-w-full">
                  <div className="text-lg italic font-light leading-7 text-blue-900 max-md:max-w-full">
                    09 May 2023
                  </div>
                  <div className="mt-2.5 text-3xl leading-10 text-stone-950 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur lacus auctor amet
                    varius in ...
                  </div>
                </div>
                <div className="flex gap-0.5 my-auto text-xl font-semibold text-blue-900 capitalize">
                  <div>read more</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/35bc81500e2878fe0000ab64b7f56aa147720f882d4f5e09ec410ebe349e279b?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                    className="shrink-0 my-auto aspect-[0.5] fill-blue-800 w-[9px]"
                  />
                </div>
              </div>
              <div className="flex gap-2 p-6 mt-6 rounded-2xl bg-slate-100 max-md:flex-wrap max-md:px-5">
                <div className="flex flex-col flex-1 max-md:max-w-full">
                  <div className="text-lg italic font-light leading-7 text-blue-900 max-md:max-w-full">
                    09 May 2023
                  </div>
                  <div className="mt-2.5 text-3xl leading-10 text-stone-950 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur lacus auctor amet
                    varius in ...
                  </div>
                </div>
                <div className="flex gap-0.5 my-auto text-xl font-semibold text-blue-900 capitalize">
                  <div>read more</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/35bc81500e2878fe0000ab64b7f56aa147720f882d4f5e09ec410ebe349e279b?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                    className="shrink-0 my-auto aspect-[0.5] fill-blue-800 w-[9px]"
                  />
                </div>
              </div>
              <div className="flex gap-2 p-6 mt-6 rounded-2xl bg-slate-100 max-md:flex-wrap max-md:px-5">
                <div className="flex flex-col flex-1 max-md:max-w-full">
                  <div className="text-lg italic font-light leading-7 text-blue-900 max-md:max-w-full">
                    09 May 2023
                  </div>
                  <div className="mt-2.5 text-3xl leading-10 text-stone-950 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur lacus auctor amet
                    varius in ...
                  </div>
                </div>
                <div className="flex gap-0.5 my-auto text-xl font-semibold text-blue-900 capitalize">
                  <div>read more</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/35bc81500e2878fe0000ab64b7f56aa147720f882d4f5e09ec410ebe349e279b?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                    className="shrink-0 my-auto aspect-[0.5] fill-blue-800 w-[9px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-20 pb-1.5 mt-52 w-full max-md:mt-10 max-md:max-w-full">
        <div className="self-center mt-28 w-full max-w-[1420px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch px-5 text-white max-md:mt-10 max-md:max-w-full">
                <div className="text-7xl font-light leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                  Our Compliance and Regulatory
                </div>
                <div className="mt-8 text-2xl leading-8 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Viverra justo odio
                  platea parturient phasellus aliquam. Gravida amet leo quis nam
                  nibh.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col flex-wrap content-start self-stretch my-auto text-4xl leading-10 text-white max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-md:flex-wrap">
                  <div className="flex gap-5 justify-between px-5 py-4 whitespace-nowrap rounded-lg bg-white bg-opacity-10 max-md:px-5">
                    <div>Municipality</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c77b027512cca78f7f5670b593e785e9e94a31d737602a57e47240009e462c5?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                      className="shrink-0 self-start w-8 aspect-square"
                    />
                  </div>
                  <div className="flex gap-5 justify-between px-5 py-4 rounded-lg bg-white bg-opacity-10 max-md:px-5">
                    <div>Civil Defense</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c77b027512cca78f7f5670b593e785e9e94a31d737602a57e47240009e462c5?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                      className="shrink-0 self-start w-8 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-7 max-md:flex-wrap">
                  <div className="flex gap-5 justify-between px-5 py-4 whitespace-nowrap rounded-lg bg-white bg-opacity-10 max-md:px-5">
                    <div>SFDA</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c77b027512cca78f7f5670b593e785e9e94a31d737602a57e47240009e462c5?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                      className="shrink-0 self-start w-8 aspect-square"
                    />
                  </div>
                  <div className="flex gap-5 justify-between px-5 py-4 rounded-lg bg-white bg-opacity-10 max-md:flex-wrap max-md:px-5">
                    <div>ISO 9001:2015</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c77b027512cca78f7f5670b593e785e9e94a31d737602a57e47240009e462c5?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                      className="shrink-0 self-start w-8 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-7 leading-10 max-md:flex-wrap">
                  <div className="flex gap-5 justify-between px-5 py-4 rounded-lg bg-white bg-opacity-10 max-md:px-5">
                    <div>
                      ISO 1<span className="">4</span>000:2015
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c77b027512cca78f7f5670b593e785e9e94a31d737602a57e47240009e462c5?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                      className="shrink-0 self-start w-8 aspect-square"
                    />
                  </div>
                  <div className="flex gap-5 justify-between px-5 py-4 rounded-lg bg-white bg-opacity-10 max-md:px-5">
                    <div>
                      ISO <span className="">4</span>5001:2018
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c77b027512cca78f7f5670b593e785e9e94a31d737602a57e47240009e462c5?apiKey=b5c0742263224b4db0641fab4d5d8268&"
                      className="shrink-0 self-start w-8 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col items-center p-20 mt-36 w-full min-h-[1068px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4c670c326199fd2657a9911dd5c5c963ade1e40ccb5c2780ae1d219d750f357?apiKey=b5c0742263224b4db0641fab4d5d8268&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4c670c326199fd2657a9911dd5c5c963ade1e40ccb5c2780ae1d219d750f357?apiKey=b5c0742263224b4db0641fab4d5d8268&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4c670c326199fd2657a9911dd5c5c963ade1e40ccb5c2780ae1d219d750f357?apiKey=b5c0742263224b4db0641fab4d5d8268&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4c670c326199fd2657a9911dd5c5c963ade1e40ccb5c2780ae1d219d750f357?apiKey=b5c0742263224b4db0641fab4d5d8268&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4c670c326199fd2657a9911dd5c5c963ade1e40ccb5c2780ae1d219d750f357?apiKey=b5c0742263224b4db0641fab4d5d8268&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4c670c326199fd2657a9911dd5c5c963ade1e40ccb5c2780ae1d219d750f357?apiKey=b5c0742263224b4db0641fab4d5d8268&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4c670c326199fd2657a9911dd5c5c963ade1e40ccb5c2780ae1d219d750f357?apiKey=b5c0742263224b4db0641fab4d5d8268&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4c670c326199fd2657a9911dd5c5c963ade1e40ccb5c2780ae1d219d750f357?apiKey=b5c0742263224b4db0641fab4d5d8268&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-2 mt-64 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/45bf2ad687b2e561b7a62d52e2b927f60b607efaadf8e155cde44f803af13ede?apiKey=b5c0742263224b4db0641fab4d5d8268&"
              className="shrink-0 w-12 aspect-[0.47] fill-blue-300"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4766b5c5094494ce43c7bbd2de8bf32bfdc8d8691337751a2fae27af86b2ed64?apiKey=b5c0742263224b4db0641fab4d5d8268&"
              className="shrink-0 w-12 aspect-[0.47] fill-blue-400"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44051e1e52023b1b5ce8d97fc56c45185727c0dc2733d717e36439d03626fdef?apiKey=b5c0742263224b4db0641fab4d5d8268&"
              className="shrink-0 w-12 aspect-[0.47] fill-blue-400"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4732cad46580b69036d6e629c840a4c55adcd41abab67fa1af714d0080c0b4f?apiKey=b5c0742263224b4db0641fab4d5d8268&"
              className="shrink-0 aspect-[0.46] fill-blue-500 w-[47px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f629a8cb32833c0021a2714727519eff0494d3fcb566b6ad518da841f3e42b7?apiKey=b5c0742263224b4db0641fab4d5d8268&"
              className="shrink-0 w-12 aspect-[0.47] fill-blue-700"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/26fab39870bc74cf56adf3800bedc7720833fa0af94ca36944af3e8fcc110c87?apiKey=b5c0742263224b4db0641fab4d5d8268&"
              className="shrink-0 w-12 aspect-[0.47] fill-blue-800"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/920716eced94771ecaf58e7042dd08ba300c9389473813850a4e1f52d2e439de?apiKey=b5c0742263224b4db0641fab4d5d8268&"
              className="shrink-0 w-12 aspect-[0.47] fill-blue-900"
            />
          </div>
          <div className="relative mt-4 mb-56 text-7xl font-light text-center text-white leading-[80px] w-[1379px] max-md:mb-10 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Lorem ipsum dolor sit amet consectetur. Iaculis et eget nulla in at
            vulputate pellentesque a vel.
          </div>
        </div>
      </div>
      <div className="z-10 self-center mt-48 w-full max-w-[1780px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 text-2xl leading-8 text-stone-950 max-md:mt-10 max-md:max-w-full">
              <div className="text-7xl font-light leading-[79.8px] max-md:max-w-full max-md:text-4xl">
                Get in Touch
              </div>
              <div className="mt-8 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Viverra justo odio
                platea parturient phasellus aliquam. Gravida amet leo quis nam
                nibh.
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
                  Business park, near to Jamjoom center, Al Hamrah dist. P.O.
                  box: 8960, KSA. Jeddah 21<span className="">4</span>92
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
                  className="shrink-0 border border-blue-900 border-solid aspect-square stroke-[1px] stroke-blue-900 w-[35px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
