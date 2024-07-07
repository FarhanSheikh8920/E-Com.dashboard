import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const Protected=(props) =>{
let Cmp=props.Cmp
const history=useNavigate()

useEffect(() => {
    if(!localStorage.getItem('user-info')){
       history('/register')
    }
       },[])
return(<>
<Cmp />


</>)
}
