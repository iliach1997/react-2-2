
const sizes={
    default:'container',
    fluid: 'container-fluid',
     
};
export const Layout=({children,className, size='fluid'})=>{

    return (
    
            
        <div className={`${sizes[size]} ${className}`}>{children}

    </div>
    )
}