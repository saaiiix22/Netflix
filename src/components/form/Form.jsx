import React from "react";

const Form=()=>{
    return(
        <div className="h-[80%] w-[30%] z-10 bg-white border-2 border-white flex flex-col justify-center items-center gap-5">
            <input className="h-[7%] w-[80%] border-2 border-slate-400 ps-5" placeholder="Name" />
            <input className="h-[7%] w-[80%] border-2 border-slate-400 ps-5" placeholder="Email" />
            <input className="h-[7%] w-[80%] border-2 border-slate-400 ps-5" placeholder="Password" />
            <br />
            <button className="h-[7%] w-[80%] text-white bg-red-500">Click ME</button>
        </div>
    )
}
export default Form