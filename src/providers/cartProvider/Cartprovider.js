import { createContext } from "react";
import { useState } from "react";
export const CartContext=createContext({
    total:0,
});
CartContext.displayName='CartProvider';
export const Cartprovider=({children})=>{
    const [cart,setcart]=useState({total:0,items:{}})

      
       const addNewItem=(products)=>{
           setcart((prov)=>{
               let newItem;
        if(prov.items[products.id]){
            const cartProduct=prov.items[products.id];
            newItem={
                ...cartProduct,
                qty:cartProduct.qty+1,
            }
        }
        else{
            newItem={
                price:products.price,
                qty:1,
            }
        }

            return{
                ...prov,
                total: prov.total+products.price,
                items:{
                    ...prov.items,
                    [products.id]:newItem,
                }
            }
           })
       }

    const removeItem=(prodact)=>{
     setcart((prev)=>{
         let newItem={...prev.items};
         let total=prev.total;
         if(prev.items[prodact.id]){
             const cartProduct=prev.items[prodact.id];
             if(cartProduct.qty>1){
               newItem={
                   ...prev.items,
                   [prodact.id]:{
                       ...cartProduct,
                 qty:cartProduct.qty-1}
                 
             }

           total-=prodact.price;
    }
    
    else{
        total-=prodact.price
        delete newItem[prodact.id]
    }

}
        
         return{
             ...prev,
             total,
             items:newItem
         }
     })

      }
    return(
        <CartContext.Provider value={{cart,addNewItem,removeItem,}}>{children}</CartContext.Provider>
    )
} 