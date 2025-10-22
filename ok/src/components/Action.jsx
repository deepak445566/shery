import React from 'react'
import { useNavigate } from 'react-router-dom';

function Action() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/Contact");
  };
  return (
    <div className="flex justify-center mt-20 px-4 " id='action'>
      <div
        className="max-w-5xl w-full py-16 md:pl-20 md:w-full max-md:text-center mx-auto flex flex-col md:flex-row items-center justify-between rounded-2xl p-10 text-slate-900 "
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
          `,
          backgroundSize: "100% 100%"
        }}
      >
        <div>
          <h1 className=" text-3xl lg:text-4xl md:text-[46px] md:leading-[60px] font-semibold text-slate-800 big">
         Let’s build something great together
          </h1>
          <p className="text-md text-slate-700 mont mt-2">
      Let’s collaborate and craft something unforgettable, just for your success.
          </p>
        </div>
        <button      onClick={goToContact} className="px-10 py-3 text-white bg-black rounded-full text-md alan mt-6">
       CONTACT US
        </button>
      </div>
    </div>
  )
}

export default Action
