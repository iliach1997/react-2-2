import { useState } from "react"


export const Collapsible=({closedTitle,openedTitle, isopend, children, className})=>{
    const [opend, setopend]=useState(isopend)
    return(
        <div className={`row box shadow p-3 my-3 ${className}`}>
            <h2 style={{
               cursor:'pointer' ,
        
            }} className="text-muted fs-2" onClick={()=>setopend(!opend)}>{opend ? openedTitle : closedTitle}</h2>
            <div className="col-12">{opend?children:null}</div>
            </div>
    )
}