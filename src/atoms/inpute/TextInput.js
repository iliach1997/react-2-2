
export const TextInput=({value,placeholder, onChange})=>{
    const id = Math.random().toString();
    return(
        <div class="input-group mb-3">
         <span class="input-group-text"id="{id}">
             @
            </span>
  <input
   type="text" 
   class="form-control" 
   placeholder={placeholder}
   id={id} 
   value={value}
   onChange={onChange}
/>
</div>
    )
};