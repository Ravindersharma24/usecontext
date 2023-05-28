import React,{useState} from "react";
import UserContext from "./UserContext";

const UserState = (props)=>{
    const state = {
        "name" : "Ravinder",
        "age" : "25",
        "designation" : "Full stack developer",
        "country" : "India",
        "mobile" : "9988998898",
    }
    const [userState,setUserState] = useState(state)

    const updateUser = ()=>{
        setTimeout(()=>{
            setUserState({...userState,name:'Nik Sharma'})
        },2000)
    }

     return (
        <UserContext.Provider value={{userState,setUserState,updateUser}}>
            {props.children}
        </UserContext.Provider>
     )
}

export default UserState;