import { useState } from "react";

import { Welcome, Welcome2} from "../../components/header";



export const Home=(props)=> {
const [open, setopen]=useState(true)

    return (
        <div className="col-12 my-3">
            <button className='btn' onClick={()=>setopen(!open)}>submit</button>
            {open ?  <Welcome user="ilia chapidze" age="25"/> : <Welcome2 user='mito chapidze' age="23"/>}
  
        </div>
    );
}