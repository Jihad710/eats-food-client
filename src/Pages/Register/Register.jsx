import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';


const Register = () => {
    const {auth, user, loading, login, CreateUser, logOut, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    const [check, setCheck] = useState(false)
    
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleCreateUser =(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const rePassword = form.rePassword.value
        
        if (password !== rePassword){
            toast.error('Password did not matched!');
           return;
        }

        CreateUser(email, password)
        .then(result=>{
            const loggedUser = result.user
            updateProfile(auth.currentUser,{
                displayName: name,
                photoURL: photo,
              }).then(() => {
                // Update successful
              }).catch((error) => {
                console.log(error.message)
              });
            
            console.log(loggedUser)
            toast.success('Registration success')
            form.reset()
            navigate(from , {replace:true})
        })
        .catch(error=>{toast.error(error.message)})
        

    }

    
    const handleAccept = () => {
        setCheck(!check);
        
      };
    return (
        <div>
             
        </div>
    );
};

export default Register;