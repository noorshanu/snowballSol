import React from "react";
import RoadmapCards from "../components/RoadmapCards";

function MemeCards() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
     
      <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30">
       Products
        </h2>
       

      <div className=" flex  gap-4 justify-between flex-col sm:flex-row">
      
    
       

        <div className=" max-w-full sm:max-w-xl ">
          <RoadmapCards/>

        </div>

        <div className=" w-full">
           
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one  text-black   font-medium">
              1. SnowballSol AI: As sharp as a freshly-honed icicle, our AI slices through market data, offering crisp analysis to guide your journey through the crypto blizzard.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one   text-black  font-medium">
              2. SnowballSol Trading Bot: Swift as an avalanche, our trading bot navigates the peaks and valleys of the market with precision, ensuring you stay ahead of the frosty competition.

            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-black  font-medium">
              3. Staking: Stake your coins and watch your rewards accumulate like snowflakes in a blizzard, all while fortifying the SnowballSol network against the chilly winds of uncertainty.


            </h1>
          
          </div>
      </div>
    </div>
  );
}

export default MemeCards;
