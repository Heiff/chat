import React,{createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext()

const ContextProvider = ({children})=>{
  

  const [ gender,setGender ] = useState();
  const [ country,setCountry ] = useState();
  const [ name,setName ] = useState();
  const [ age,setAge ] = useState();
  const [err,setErr] = useState("");
  const [volume,setVolume] = useState(true);
  const [ message,setMessage ] = useState()
  const [ myMessage,setMyMessage ] = useState([]);
  const [usersFilter,setUsersFilter] = useState("");
  const [envelope,setEnvelope] = useState(false);
  const [bars,setBars] = useState(false);
  const male = "https://chattusa.com/img/128/male-0.png"
  const female = "https://chattusa.com/img/128/female-49.png"
 

  const navigate = useNavigate();

const Users = [
    {id:1,name:"user",gender:"male",avatar:"https://chattusa.com/img/128/male-0.png",from:"UZ",message:"message user"},
    {id:2,name:"user2",gender:"female",avatar:"https://chattusa.com/img/128/female-49.png",from:"UZ",message:"message user2"},
    {id:3,name:"user3",gender:"female",avatar:"https://chattusa.com/img/128/female-49.png",from:"UZ",message:"message user3"},
    {id:4,name:"user4",gender:"male",avatar:"https://chattusa.com/img/128/male-0.png",from:"UZ",message:"message user4"}
]
 

const filteringUsers = Users.filter(el => {
    if(usersFilter === "male" || usersFilter === "female") return el.gender === usersFilter;
        return el
})

   
const LoginFunc = (e) =>{
    if (gender && country && name && age) {
        localStorage.setItem("gender",gender);
        localStorage.setItem("country",country);
        localStorage.setItem("name",name);
        localStorage.setItem("age",age);
        navigate('/home')
    }
}


    
const SendMessage = (e) => {
    setMyMessage([...myMessage,message])
    setMessage("")
}


  



const Buttons = (e) =>{
if (e == "envelope") {
    setEnvelope(!envelope)
    setBars(false)
}
else if(e == "bars"){
    setEnvelope(false);
    setBars(!bars)
}
}

const Logout = () => {
    localStorage.clear();
    navigate("/")
}




    return(
        <Context.Provider value={{
            gender,setGender,setCountry,setName,setAge,LoginFunc,country,err,
            setErr,Users,volume,setVolume,male,female,usersFilter,setUsersFilter,
            filteringUsers,message,setMessage,SendMessage,myMessage,Buttons,envelope,
            bars,Logout,navigate,setBars,setEnvelope}}>
            {children}
        </Context.Provider>
    )
}
export {Context,ContextProvider}
