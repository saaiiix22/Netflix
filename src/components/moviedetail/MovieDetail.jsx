import React from "react";

const MovieDetail=()=>{
    return(
        <main className="h-[50%] w-[22%] text-[#525355] absolute top-[25%] left-[10%] z-30">
            <div className="top h-[30%] w-[100%] flex justify-center flex-col items-center relative">
                <img src="https://images.ctfassets.net/4cd45et68cgf/7dmj313rXtZ0NIlhbORqEN/8c312deefd7b2c1f0850e5c4e7c8c857/Stranger_Season_Logo_Neon_Hi-Res_RGB_V2.png?w=2000" className="h-[100%] w-[90%]" alt="" />
            </div>
            <div className="mid h-[10%] w-[100%]">
                <ul className="h-[100%] w-[100%] flex items-center justify-center gap-5 text-white">
                    <li className="text-green-500 font-[700]">95% Match</li>
                    <li className="text-[#919191] text-[16px]  font-[700]">2017</li>
                    <li className="text-[#919191] text-[16px]  font-[700]">2 Seasons</li>
                    <li className="text-[#919191] text-[16px]  font-[700]">4K Ultra HD</li>
                    <li className="text-[#919191] text-[16px]  font-[700]">5.1</li>
                </ul>
            </div>
            <div className="bottom text-[#919191] h-[65%] w-[100%] text-start ps-3 pt-4">
                <p>
                    When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl
                </p>
                <br />
                <p>
                    Winona Ryde, David Harbour, Mathew Modine
                </p>
                <p>TV Shows, TV Sci-Fi & Fantasy, Teen Tv Shows</p>
            </div>
        </main>
    )
}
export default MovieDetail