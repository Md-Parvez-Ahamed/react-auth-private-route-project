import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import auth from './../firebase/firebase.confiq';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser] =useState(null)
    const [loading,setLoading] = useState(true)
    
    //create a new user in email and password
    const createUser =(email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // Sing in user in email and password
    const singInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Sing out user
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // Observing auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log("observing Current user",currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[])

    // Context method
    const authInfo = {
            user,
            loading,
            createUser,
            singInUser,
            logOut
        }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}