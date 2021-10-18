import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Pages/Authentication/Firebase/Firebase.init";


initialAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .finally(() =>  setIsLoading(false) )
        
    
    }



    const createUserEmailPassword = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        
        .then(result =>{
            console.log(result.user);
            updateProfile(auth.currentUser, { displayName: name })
        
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => setIsLoading(false))
    
    }
    const signInUserEmailPassword = (email, password) => {
        
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch((error) => {
            console.log(error.message);
        });
    
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);

        });

        return () => unsubscribe;

    }, [])

    return {
        signInWithGoogle,
        logOut,
        createUserEmailPassword,
        signInUserEmailPassword,
        isLoading,
        user
    }



};

export default useFirebase;