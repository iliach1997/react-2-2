export const ProdactsItem=({prodact})=>{
    return(
        <div>
            <h4>{prodact.name}, wirebuleba -${prodact.price}</h4>
            <h5>maragshia:{prodact.stoke ? 'maragshia':' ar aris maragshi'}, categori -{prodact.categori}</h5>
        </div>
    )
}