import React,{useContext, useEffect} from 'react'
import userContext from '../context/User/UserContext'

const Home = () => {
    const user = useContext(userContext)

    useEffect(()=>{
        user.updateUser();
    },[])

    const changeName = ()=>{
        user.setUserState({...user.userState,name:'Ravinder Sharma'})
    }
  return (
    <div>
       <h1> Welcome {user.userState.name}</h1>
       <input type='button' onClick={changeName} value="Change Name"/>
    </div>
  )
}

export default Home