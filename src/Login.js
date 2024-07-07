import Header from "./Header"
import { useEffect, useState}from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
export const Login = () => {
    const history = useNavigate()
    const [email,setemail]=useState()   
    const [password,setpassowrd]=useState("") 
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history('/Addproduct')
        }
    }, [])

    async function Login(){
        console.warn("email and password",email,password)
        let item={email,password}
        let result= await fetch("http://localhost:8000/api/login",{
        
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
history('/addproduct')
}





    return (<>
        <Header />
        <h1>Login</h1>
        <div className="col-sm-6 offset-sm-3">
    <input type="text" placeholder="Email" className="form-control" onChange={(e) => setemail(e.target.value)} /> <br/> <br/> 
    <input type="password" placeholder="Password" className="form-control" onChange={(e) => setpassowrd(e.target.value)} /> <br/> <br/> 
<Button color="blue" onClick={Login}>Login</Button>        
    </div>

    </>)
}
