import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import {useradded} from '../features/users/usersslice'
const netlifyIdentity = require("netlify-identity-widget")


const LogIn= ()=>{
    const users= useSelector(state => state.user)
    const dispatch = useDispatch()
    const [user,setuser] = useState(users)
    netlifyIdentity.init()
    netlifyIdentity.open()
return(
    
    netlifyIdentity.init()
    // netlifyIdentity.open(),
    //    setuser(netlifyIdentity.currentUser()) 

)
   }
export default LogIn