import React, { useContext } from "react";
import MovieDetail from "../moviedetail/MovieDetail";
import { GlobalContext } from "../../App";
import Form from "../form/Form";

const Body=()=>{

    const {popUp,setPopup} = useContext(GlobalContext)


    return(
        <div className="body h-[93vh] w-[100%] bg-[url(https://r4.wallpaperflare.com/wallpaper/260/579/821/stranger-things-netflix-hd-wallpaper-e3bff7371eb247f486eaaa74f42d8fda.jpg)] bg-cover bg-center relative flex justify-center items-center">
            <MovieDetail/>

            {popUp?<Form/>:""}

        </div>
    )
}
export default Body