import About from "./Components/About";
import Footer from "./Components/Footer";
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
      <Footer />
    </div>
  );
}
