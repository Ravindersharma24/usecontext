import React,{useContext} from 'react'
import userContext from '../context/User/UserContext'

const About = () => {
    const user = useContext(userContext)
  return (
    <div>Hello my name is {user.userState.name} . I a'm {user.userState.age} years old. and working as a {user.userState.designation} in {user.userState.country}</div>
  )
}

export default About