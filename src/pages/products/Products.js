import productsData from '../../products.json'
import { ProdactsItem } from './ProdactsItem';
import { useState } from 'react'

export const Products=()=>{
 const [stokeOnly, setstokeOnly]=useState(false);



const renderProducts=()=>{
    let data=productsData.slice();
    if(stokeOnly){
        data= data.filter((item)=>item.stoke)
    }
    return data.map((item, index)=>{
      return <ProdactsItem prodact={item} key={index}/>
    })
}
    return(
        <div className="row shedow-sm">
           <h3>Products</h3>
           <button className='btn' onClick={()=>setstokeOnly(!stokeOnly)}>mashvene maragshi myofi products</button>
           <hr/>
         {renderProducts()}
        </div>
    )
}