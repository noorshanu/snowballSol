import React from "react";
import RoadmapCards from "../components/RoadmapCards";

function MemeCards() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
     
      <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30">
       Products
        </h2>
       

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row">
      
    
       

        <div className=" max-w-full sm:max-w-xl ">
          <RoadmapCards/>

        </div>

        <div className=" w-full">
            <p className=" font-groot-one text-xl sm:text-3xl  text-black  font-semibold  py-2">
            DinoDoge isn't your average meme coin - he's the next viral meme! 
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one  text-black   font-medium">
              1. DinoDoge Game: Adventure awaits! Explore, collect, and have a blast in our dino-filled jungle!
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one   text-black  font-medium">
              2. DinoDoge Pet Store: Adopt your virtual pet today! Find the perfect furry friend in our sanctuary.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-black  font-medium">
              3. Staking: Earn rewards effortlessly! Support DinoDoge and hodl for rewards.

            </h1>
            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-black  font-medium">
              3. Meme Creation: Laugh non-stop with our hilarious memes! Join the fun in the solana jungle!

            </h1>
          </div>
      </div>
    </div>
  );
}

export default MemeCards;
