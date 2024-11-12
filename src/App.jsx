import React, { createContext, useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Body from "./components/body/Body"
import MovieList from "./components/movielist/MovieList"

export const GlobalContext = createContext("")

function App() {

  let [popUp,setPopup] = useState(false)

  return (
    <GlobalContext.Provider value={{popUp,setPopup}}>
      <div className="app bg-black">
        <Navbar/>
        <Body/>
        <h1 className="bg-black text-white ps-5 font-[500] text-[22px]">Popular On Netflix</h1>
        <br />
        <MovieList/>
      </div>
    </GlobalContext.Provider>
  )
}

export default App
