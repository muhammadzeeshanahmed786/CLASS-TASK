import React,{useState ,useContext} from "react";
import {GlobalContext} from "../context/context"
function SignIn(){

    const {state,dispatch}= useContext(GlobalContext);
  

    let [name,setName]=useState('')
    let [email,setEmail]=useState('')
    let [pass,setPass]=useState('')
    let [roll,setRoll]=useState('');

function addUser(){

        if(name=="" || pass=="" || email =='' || roll == ""){
            console.log("All Fields Required")
        }

else{
    let UserData={
        newName:name,
        newEmail:email,
        newPAss:pass,
        newRoll:roll
        }
       
        dispatch({type: "UPDATE_USER" , payload:UserData})

    }
}



    return(
        <div>
           UserName:
           <br/> <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
           <br/>
           <br/>
           Email:
           <br/> <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
           <br/>
           <br/>
           Password: 
           <br/><input type="text" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
           <br/>
           <br/>
           Role: 
           <br/><input type="text" value={roll} onChange={(e)=>{setRoll(e.target.value)}}/>
           <br/>
           <br/>
        <button onClick={addUser}>Submit</button>

        </div>

    )
}

export default SignIn;