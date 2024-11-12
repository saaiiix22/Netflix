import React from "react"; 

const MovieList=()=>{

    const imgList = [
        "https://resizing.flixster.com/PhHZmxuofO-BWgYa7WykhMdu7Gc=/206x305/v2/https://resizing.flixster.com/QXpTr_BKDhsDNsR2qQTp1Nq9zIA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ0ODU2ZmFjLWYzNjQtNDEwMS04ZjUzLWVhNTFiODU1NTVkMC5qcGc=",
        "https://resizing.flixster.com/l1RRhYArEocQ3J1r-MObIW5Gwts=/206x305/v2/https://resizing.flixster.com/i2UMiDLcrNbgbB5ePWp-Qg6Iafw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiOTVkMGJlLTI5Y2ItNGFkYi04NWM3LTE4MmNjMzI2NGU4ZC5qcGc=",
        "https://resizing.flixster.com/Io7gIn2CYwEVLW_vxUcTMBVq3nA=/206x305/v2/https://resizing.flixster.com/SyNPn8Ak7pZq3Ty6KNweMCMR-as=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYxNjNkNDEyLWI5ZDQtNGY1Zi1iZjU1LTYxYzE2NGRkZDI5Mi5qcGc=",
        "https://resizing.flixster.com/KO5VDkDleeuD9ao7in62T05bZIE=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24706773_v_v8_ae.jpg",
        "https://resizing.flixster.com/alu6duJ2qs79Qg8900FNocwFqn0=/206x305/v2/https://resizing.flixster.com/TQbPOCGSoK64qdQnL1CAUJ3-fnA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMwNjc3NjdmLTgwYzEtNDFiZC1hN2I4LTg2Y2RlZTBjMjNlOC5qcGc=",
        "https://resizing.flixster.com/9amIPW3LZwE2AIaJ_RG8MgOnbJU=/206x305/v2/https://resizing.flixster.com/wqQtZQw1x3aw5nyI4wGvhWPRnpc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2IwYjlkNTkwLWYyOWItNGNiOS1iZTdjLTA4YTRmNGViNDRjNi5qcGc=",
        "https://resizing.flixster.com/39z3DymgZ3YcPiJfkuHW_vM3Gd0=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25748803_p_v13_aa.jpg",
        "https://resizing.flixster.com/Va2mNsItGU7k3jcz9ZdexSWoZPY=/206x305/v2/https://resizing.flixster.com/z4hiL8ZBmyZYrgP523AZvdk7uUI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRmOWU4ODJhLTNkMzAtNDNhMC04YjhjLWVkMjJjMGI4MjE4Ni5wbmc=",
        "https://resizing.flixster.com/Uk7fQRByp0Ll86TowscsOFJazo4=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28533545_v_v13_aa.jpg",
        "https://resizing.flixster.com/04n6Ma82y2yJmhtoqtpmZu7mSTM=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28692295_v_v10_aa.jpg"
    ]

    return(
        <div className="h-[15rem] w-[100%] flex justify-start items-center gap-3 bg-black ps-4">
            {/* <h1>Popular On Netflix</h1> */}
            {imgList.map((i,index)=>{
                return(
                    <img key={index} className="h-[100%] w-[9%]" src={i} alt="" />
                )
            })}
        </div>
    )
}
export default MovieList