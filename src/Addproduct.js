import { useState } from "react"
import Header from "./Header"
import { Button } from "react-bootstrap"
function Addproduct(){
const [name,setname]=useState("")
const [Price,setprice]=useState("")
const [file,setfile]=useState("")
const [description,setdecription]=useState("")
   async function add(){
        console.warn(name,Price,file,description);  
        const formData= new FormData();
        formData.append("name",name);
        formData.append("price",Price);
        formData.append("file",file);
        formData.append("description",description);
    let result = await fetch("")
    }
    
    
    
    
    
    return(<>
     <Header />
    <div className="col-sm-6 offset-sm-3">
        <br /><br />
   <input type="text" className="form-control" onChange={(e) => setname(e.target.value)} placeholder="Name" /><br />
   <input type="text" className="form-control"onChange={(e) => setprice(e.target.value)} placeholder="Price"  /><br />
   <input type="file" className="form-control" onChange={(e) => setfile(e.target.value)}placeholder="File" /><br />
   <input type="text" className="form-control"onChange={(e) => setdecription(e.target.value)} placeholder="description" /><br />
   <Button onClick={add}>Add</Button>
    </div>
    </>)
}
export default Addproduct