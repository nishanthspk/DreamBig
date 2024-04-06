import React from "react";

const Hero = () => {
  return (
    <div className="w-[1000px] mx-auto">
      <div className=" pt-[70px]">
        <div className="flex justify-between">
          <div>
            <img
              alt=""
              aria-hidden="true"
              className=""
              width="370px"
              height="637"
              src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
            />
            <div className="relative bottom-[250px] left-[60px]">
              <button className="flex justify-between items-center py-[10px] px-[14px]  ftext-base rounded-[100px] border border-[#424b5b] text-[#fff]">
                <div className="pr-[10px]">
                  <img
                    src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col px-[10px]">
                  <div>
                    <h1 className="text-[14px] font-semibold text-left leading-none">
                      Introducing GitHub Copilot X
                    </h1>
                  </div>
                  <div className="text-[#6e7681] text-[13px] text-left">
                    Your AI pair programmer is leveling up
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="octicon arrow-symbol-mktg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    ></path>
                    <path
                      class="octicon-chevrow-stem"
                      stroke="currentColor"
                      d="M1.75 8H11"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
              </button>

              <div className="text-white mt-8 pb-[30px]">
                <h1 className="text-[80px] leading-[80px] font-semibold">
                  Let’s build from here
                </h1>
                <h2 className="text-[32px] leading-[44px] font-normal text-[#7d8590] pt-[30px]">
                  Harnessed for productivity. Designed for collaboration.
                  <br />
                  Celebrated for built-in security. Welcome to the platform
                  developers love.
                </h2>
              </div>
              <div className="flex text-white gap-9">
                <button className="border border-none flex items-center justify-between  gap-1 bg-[#fff] text-[14px] py-[6px] px-[13px]  rounded-[0.375rem] font-semibold text-[#0d1117]  transition-all duration-200 ease-in-out shadow    hover:shadow-sm hover:shadow-white ">
                  <h3> Explore all features</h3>
                  <div>
                    {" "}
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      class="octicon arrow-symbol-mktg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        class="octicon-chevrow-stem"
                        stroke="currentColor"
                        d="M1.75 8H11"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </div>
                </button>
                <button className="text-[#fff] flex items-center gap-3 shadow rounded py-[6px] px-[13px] border border-transparent hover:border-white  ">
                  <span>Start a free enterprise trial</span>
                  <div>
                    {" "}
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      class="octicon arrow-symbol-mktg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        class="octicon-chevrow-stem"
                        stroke="currentColor"
                        d="M1.75 8H11"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
              className="object-contain w-[260px] h-[170px]"
              alt=""
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
