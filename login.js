import React,{useState ,useContext} from "react";
import {GlobalContext} from "../context/context"

function Login(){

    const {state,dispatch}= useContext(GlobalContext);
  

    let [email,setEmail]=useState('')
    let [pass,setPass]=useState('')

function LoginUser(){

        if( pass=="" || email ==''  ){
            console.log("All Fields Required")
        }

else{
    let UserLoginData={
        newEmail:email,
        newPAss:pass,
        }
    //    console.log(UserLoginData)
        dispatch({type: "LOGIN_USER" , payload:UserLoginData})

    }
}



    return(
        <div>
         
           Email:
           <br/> <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
           <br/>
           <br/>
           Password: 
           <br/><input type="text" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
           <br/>
           <br/>
          
        <button onClick={LoginUser}>Submit</button>

        </div>

    )
}

export default Login;