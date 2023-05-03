import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Container, Form } from 'react-bootstrap';

import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const { user, loading, login, CreateUser, logOut, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    const {error, setError}= useState(null)
    const {success, setSuccess}= useState(null)
    const [showPassword, setShowPassword] = useState(false)
    
    const handleLogin=(event)=>{
        event.preventDefault()
        console.log("jihad")
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        
        login(email, password)
        .then((result)=>{
            const loggedUser = result.user
            console.log(loggedUser)
            
        })
        .catch(error=>{console.log(error.message)})
    }
    const handleLoginWithGoogle=()=>{
        loginWithGoogle()
        .then((result)=>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error=>{console.log(error.message)})
    }
    const handleLoginWithGitHub=()=>{
        loginWithGithub()
        .then((result)=>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error=>{console.log(error.message)})
    }


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    

    return (
        <div>
           
        </div>
    );
};

export default Login;