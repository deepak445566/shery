import React from "react";

function Social() {
  return (
    <>
      <div className="h-[100vh] w-full relative">
        {/* Teal Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
            `,
            backgroundSize: "100% 100%",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 py-1">
          <h1 className="text-6xl big text-center mt-15">
           SOCIAL MEDIA HANDLEING PRICING
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {/* ---- Basic Plan ---- */}
            <div className="w-80 lg:w-90 bg-white text-center text-gray-800/80 border border-gray-200 p-6 pb-16 rounded-lg">
              <p className="font-semibold">Basic</p>
              <h1 className="text-3xl font-semibold">
               ₹4,999
              </h1>
              <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
                <li className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="#67D1C6"
                    />
                  </svg>
                  <p> 12 custom-designed posts per month</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="#67D1C6"
                    />
                  </svg>
                  <p> 2 social platform (Instagram and Facebook)</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="#67D1C6"
                    />
                  </svg>
                  <p>Captions with basic hashtags</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="#67D1C6"
                    />
                  </svg>
                  <p> Monthly content calendar</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="#67D1C6"
                    />
                  </svg>
                  <p>1 round of revisions per post</p>
                </li>
              </ul>
            
            </div>

            {/* ---- Pro Plan ---- */}
            <div className=" w-80 lg:w-120 bg-[#67D1C6] relative text-center text-white border border-gray-500/30 p-6 pb-14 rounded-lg">
              <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#49dccd] rounded-full">
                Most Popular
              </p>
              <p className="font-semibold pt-2">Pro</p>
              <h1 className="text-3xl font-semibold">
            ₹9,999
              </h1>
              <ul className="list-none text-white text-sm mt-6 space-y-1">
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="currentColor"
                    />
                  </svg>
                  <p> 16 creatively designed posts per month</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>4 stories or reels
</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="currentColor"
                    />
                  </svg>
                  <p> 2 social platforms (Instagram + Facebook or LinkedIn)</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>Captions with branded hashtag strategy</p>
                </li>
                 <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>Monthly content calendar and design theme</p>
                </li>
                 <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>2 rounds of revisions</p>
                </li>
                
              </ul>
             
            </div>

            {/* ---- Enterprise Plan ---- */}
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Social;
