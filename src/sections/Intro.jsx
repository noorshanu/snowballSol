import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 ">
      
   

        <div className="  px-4  py-2 flex justify-between flex-col  items-center ">
          <div className=" w-full ">
            {/* <RoadmapCards /> */}
            <img
              src="images/img1.webp"
              alt=""
              className=" rounded-3xl shadow-lg sm:w-[600px] h-[400px] mx-auto"
            />
          </div>
          <div className=" w-full text-center">
            <p className="font-semibold font-groot-one text-xl sm:text-3xl text-black  py-2">
              Welcome to the wild world of SnowBallSol!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one text-black  font-medium">
            Welcome to the icy world of SnowballSol, where the Captain leads the charge through the icy tundra of the Solana blockchain. Our mission? To blanket the crypto world with energy, memes, and pure snowball fun!
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-black font-medium">
           SnowBall Sol isn't your average meme coin - he's the next viral meme! Known for his cuteness, unique features, and explosive growth,SnowBall Sol offers more than just memes. 
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one text-black font-medium">
            From his hilarious antics to his groundbreakingSnowBall Sol Game and pet store,SnowBall Sol brings excitement and adventure to the crypto world! 
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
