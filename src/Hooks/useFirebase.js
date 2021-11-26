import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({});

    const auth = getAuth();

    // Sing In With Google
    const googleProvider = new GoogleAuthProvider();
    
    const singInwithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
        // .then(result =>{
        //     setUser(result.user);
        // })
        
    }
    const logout = () =>{
        signOut(auth)
        .then( () =>{
            setUser('');
        })
    }


    return {
        user,
        setUser,
        name,
        singInwithGoogle,
        logout
    }

}

export default useFirebase;