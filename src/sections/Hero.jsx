function Hero() {
  return (
    <section className=" pt-8  pb-[4rem]">
      <div className="container-wrapper">
        <h1 className=" font-groot-one text-2xl text-center sm:text-5xl font-semibold my-4 max-w-full sm:max-w-5xl mx-auto text-[#ffffff] sm:text-[#000]">
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
            href="https://solscan.io/token/5f65PYwzhSEHfDBqMdqJoQnHyQVMnWQuiVzG7WaX4gu9"
            target="_blank"
            className="my-2 font-groot-one flex justify-center text-xs  text-black  sm:text-lg font-semibold"
          >
            {" "}
            Contract : 5f65PYwzhSEHfDBqMdqJoQnHyQVMnWQuiVzG7WaX4gu9
          </a>
        </div>

        <div className="relative z-40 flex items-center justify-center my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
        <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/4RWrhM81MtAEedgZw51EnUeJWXJyfdYWXZ3XpYHHaomc?t=1710748472452"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#80dbeb] shadow-lg shadow-black/40 text-black  font-bold  border-[#000000] border-2"
          >
            DEXTOOLS
          </a>
        
          <a
            href="https://t.me/dinodogeso"
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
