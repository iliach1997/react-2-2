
export const Button=({className,text, onClick, type="button",disabled ,children})=>{
const  but =children ? children:text;
    return(
     <div>
         <button className={className} onClick={onClick} type={type} disabled={disabled}>{but}</button>
     </div>
    );
};