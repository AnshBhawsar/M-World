import "./index.css"
const Dropdown=({title,options,func})=>{
    return<>
    <div className="menu">
        <select defaultValue="0" name="format" id="format" onChange={func} > 
            <option value="0" disabled onChange={func} >
              {title}
            </option>
           {options.map((o,i)=>(
             <option value={o}  >
             {o.toUpperCase()}
           </option>
           ))}
              
        </select> 
    </div>
    </>
}
export default Dropdown;