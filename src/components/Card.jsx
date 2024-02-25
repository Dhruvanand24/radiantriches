import React, { useState } from "react";

const Card = ({ rating, ...props }) => {
  const roundedRating = Math.round(rating); // Round off the rating if it's a decimal
  const [expand, setExpand] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row relative w-full mt-6 mb-2 bg-white px-10 rounded-xl">
        {props?.type==="bc"?<div className="absolute flex bg-[#FF7724] p-2 rounded-xl -top-4 -left-4">
            <img src="/trophy.svg" alt="" /><p className="text-white ml-2">Best Choice</p>
        </div>:<></>}
        {props?.type==="bv"?<div className="absolute flex bg-[#FF7724] p-2 rounded-xl -top-4 -left-4">
            <img src="/diamond.svg" alt="" /><p className="text-white ml-2">Best Value</p>
        </div>:<></>}
        <div className="absolute -left-4 top-10 text-[20px] justify-center items-center flex h-[44px] w-[44px] rounded-[50%] text-[#626E79] ring-1 ring-[#E1E4E6]">
        {props.index}
        </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="min-h-[103px] min-w-[141px] mx-6"
          src="/cardimage.svg"
          alt=""
        />
        <p className="text-textprime-0 mt-4">{props.imagetag}</p>
      </div>
      <div className="flex flex-col px-2 lg:px-10 py-4 text-wrap lg:pr-28 md:pr-14">
        <h1 className="text-wrap font-bold text-textprime-0">
          {props.title}{" "}
          <span className="font-normal">
           {props.desc}
          </span>
        </h1>
        <h1 className="font-bold text-heading-0 mt-2">Main highlights</h1>
        <p className="text-textprime-0 mt-2 ml-4">
         {props.mh}
        </p>
        <p className="text-textprime-0 mt-2 ml-4">
          {props.mh}
        </p>
        <div className="flex w-full mt-auto">
          <p className="text-blueprime-0 mr-2 cursor-pointer select-none hover:text-blue-700 hover:font-semibold transition-all ease-linear duration-200">Show more</p>
          <img className="" src="/opentoggle.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="flex h-[118px] w-[135px] relative text-[#074786] bg-[#F3F9FF] flex-col justify-center items-center rounded-b-xl">
            <img className="absolute top-2 right-8 h-[12px] w-[12px]" src="/info.svg" alt="" />
          <h1 className="text-[32px]">{rating}</h1>
          <p className="text-[14px]">
           {props.remark}
          </p>
          <div className="rating rating-xs rating-half mt-2">
            {Array.from({ length: roundedRating }, (_, index) => (
              <input
                key={index}
                type="radio"
                name="rating-10"
                className={`bg-yellow-400 mask ${
                  index % 2 === 0
                    ? "mask-star-2 mask-half-1"
                    : "mask-star-2 mask-half-2"
                }`}
                checked
              />
            ))}
            {Array.from({ length: 5 - roundedRating }, (_, index) => (
              <input
                key={index + roundedRating}
                type="radio"
                name="rating-10"
                className="bg-yellow-400 mask mask-star-2 mask-half-2"
              />
            ))}
          </div>
        </div>
        <div className="flex bg-blueprime-0 px-24 p-[12px] mb-4 transition-all ease-in duration-200 text-white rounded-xl cursor-pointer select-none hover:bg-blue-700 ">
          View
        </div>
      </div>
    </div>
  );
};

export default Card;
