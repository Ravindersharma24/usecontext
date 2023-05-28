import React,{useContext} from 'react'
import userContext from '../context/User/UserContext'

const Contact = () => {
    const user = useContext(userContext)
  return (
    <div>Contact on - {user.userState.mobile}</div>
  )
}

export default Contact