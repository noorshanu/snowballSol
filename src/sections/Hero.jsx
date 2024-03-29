function Hero() {
  return (
    <section className=" pt-2  pb-[4rem]">
      <div className="container-wrapper">
        <h1 className=" font-groot-one text-2xl text-center sm:text-3xl font-semibold my-4 max-w-full sm:max-w-2xl mx-auto text-[#ffffff] sm:text-[#000]">
        Chill with SnowballSol: Where Memes meet the Arctic Abyss of Solana Fun!
        </h1>
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full">
              <div>
                <img
                  src="images/hero.png"
                  alt=""
                  className=" mx-auto floating"
                />
              </div>
            </div>
          

      
          </div>
        </div>

        <div className=" py-2">
          <a
            href="https://solscan.io/token/EZdXseDUR9NtCDYQ2wK42U8PZvjbityt2SnQpLSf6nBg"
            target="_blank"
            className="my-2 font-groot-one flex justify-center text-xs bg-[#80dbeb] rounded-full px-4 py-2  text-black  sm:text-lg font-semibold sm:max-w-2xl mx-auto max-w-full border-2"
          >
            {" "}
            Contract : EZdXseDUR9NtCDYQ2wK42U8PZvjbityt2SnQpLSf6nBg
          </a>
        </div>

        <div className="relative z-40 flex items-center justify-center my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
        <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/Et7EhmkHZtxuHcamrbFY7JpT4Uz5tc6cmzAsB3C8W1iG?t=1710852314977"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#80dbeb] shadow-lg shadow-black/40 text-black  font-bold  border-[#000000] border-2"
          >
            DEXTOOLS
          </a>
        
          <a
            href="https://t.me/snowballso"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#80dbeb] shadow-lg shadow-black/40 text-black  font-bold  border-[#000000] border-2"
          >
            join telegram
          </a>

      
        </div>
      </div>
    </section>
  );
}

export default Hero;
