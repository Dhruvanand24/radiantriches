import React from "react";
import Card from "../components/Card";
import CardTwo from "../components/CardTwo";

const Home = () => {
  return (
    <div className="flex flex-col w-full mt-12 px-4 lg:px-72 items-center">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-[34px] lg:text-[48px] text-heading-0">
          Best Website builders in the US
        </h1>
        <div className="flex mt-6 w-full px-1 border border-x-0 border-y-2 justify-between items-center text-textprime-0">
          <div className="flex text-[10px] lg:text-[14px] items-center">
            <img src="/check.svg" className="w-[20px] h-[20px]" alt="" />
            <p className="ml-2 text-textprime-0">Last Updated</p>
            <p className="ml-2">-</p>
            <p className="ml-2">February 22, 2020</p>
            <img src="/info.svg" className="w-[20px] h-[20px] ml-6 cursor-pointer" alt="" />
            <p className="ml-2">Advertising Disclosure</p>
          </div>
          <ul className="hidden lg:menu menu-horizontal  px-1 justify-end">
            <li className="">
              <details >
                <summary className="text-[10px] lg:text-[14px]">
                  Top Relevant
                </summary>
                <ul className="p-2 bg-white">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="flex w-full">
          <ul className="menu menu-horizontal lg:hidden px-1 justify-end">
            <li>
              <details>
                <summary className="text-[10px] lg:text-[14px]">
                  Top Relevant
                </summary>
                <ul className="p-2 bg-white">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="flex text-[10px] lg:text-[14px] mt-2 lg:mt-6 w-full px-1 items-center gap-8 flex-wrap gap-y-2 text-textprime-0">
          <p className="bg-white p-2 px-6 rounded-lg transition-all ease-in duration-300 hover:bg-dark-0 hover:shadow-xl hover:text-white cursor-pointer select-none">
            Tools
          </p>
          <p className="bg-white p-2 px-6 rounded-lg transition-all ease-in duration-300 hover:bg-dark-0 hover:shadow-xl hover:text-white cursor-pointer select-none">
            AWS Builder
          </p>
          <p className="bg-white p-2 px-6 rounded-lg transition-all ease-in duration-300 hover:bg-dark-0 hover:shadow-xl hover:text-white cursor-pointer select-none">
            Start Build
          </p>
          <p className="bg-white p-2 px-6 rounded-lg transition-all ease-in duration-300 hover:bg-dark-0 hover:shadow-xl hover:text-white cursor-pointer select-none">
            Build Supplies
          </p>
          <p className="bg-white p-2 px-6 rounded-lg transition-all ease-in duration-300 hover:bg-dark-0 hover:shadow-xl hover:text-white cursor-pointer select-none">
            Tooling
          </p>
          <p className="bg-white p-2 px-6 rounded-lg transition-all ease-in duration-300 hover:bg-dark-0 hover:shadow-xl hover:text-white cursor-pointer select-none">
            BlueHosting
          </p>
        </div>
        <div className="flex flex-wrap mt-6 mb-4 w-full px-1 items-center text-[10px] lg:text-[14px] gap-4">
          <p className="cursor-pointer select-none hover:text-black hover:font-semibold">Home</p>
          <img src="/right.svg" alt="" />
          <p className="cursor-pointer select-none hover:text-black hover:font-semibold">Hosting for all</p>
          <img src="/right.svg" alt="" />
          <p className="cursor-pointer select-none hover:text-black hover:font-semibold">Hosting</p>
          <img src="/right.svg" alt="" />
          <p className="cursor-pointer select-none hover:text-black hover:font-semibold">Hosting6</p>
          <img src="/right.svg" alt="" />
          <p className="cursor-pointer select-none hover:text-black hover:font-semibold">Hosting5</p>
        </div>

        <Card rating={9.8} index={1} type={"bc"} imagetag={"Builder1"} remark={"Exceptional"} />
        <Card rating={9.5} index={2} type={"bv"} imagetag={"Builder"} remark={"Exceptional"}/>
        <Card rating={9.3} index={3} imagetag={"Builder1"}remark={"Exceptional"}/>
        <CardTwo rating={9.1} index={4} remark={"Very Good"}/>
        <h1 className="mt-12 text-heading-0 text-[32px]">Related deals you might like for</h1>

      </div>
    </div>
  );
};

export default Home;
