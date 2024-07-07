import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function Register(){
    useEffect(() => {
 if(localStorage.getItem('user-info')){
    history('/Addproduct')
 }
    },[])
    const [name,setname]=useState("")   
    const [email,setemail]=useState("")   
    const [password,setpassowrd]=useState("")   
    const history=useNavigate("")
    
   async function Login(){
    const item={name,email,password}
    
    
    let result= await fetch("http://localhost:8000/api/register",{
        
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
           "Accept":"application/json"
        },body:JSON.stringify(item)
    }  
); 
result=await result.json()
console.warn("result",result)
localStorage.setItem("user-info",JSON.stringify(result));
history("/Addproduct")
}




return(<>
     <Header />
    <h1>Register</h1>
  <div className="col-sm-6 offset-sm-3">
    <input type="text" placeholder="User name" className="form-control" onChange={(e) => setname(e.target.value)}/><br/> <br/> 
    <input type="text" placeholder="Email" className="form-control" onChange={(e) => setemail(e.target.value)} /> <br/> <br/> 
    <input type="password" placeholder="Password" className="form-control" onChange={(e) => setpassowrd(e.target.value)} /> <br/> <br/> 
<Button color="blue" onClick={Login}>Sign Up</Button>        
    </div>
    
    </>)
    
}
export default Register;