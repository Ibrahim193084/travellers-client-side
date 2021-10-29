import initializeAuthentication from './../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut, sendEmailVerification} from "firebase/auth";
import { useEffect, useState } from 'react';



initializeAuthentication()
const useFirebase = () =>{
    const [user , setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // google sign in handler
    // -------------------------
    const signInWithGoogle = () =>{
      setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
    }
    // send verification email in user eamil
    // -----------------------------------------
    const sendVerification = () =>{
     sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
      });
    }
    // set user on auth state change
    // --------------------------------
    useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return unsubscribed;
    },[])

    // handle log out
    const logOut = () =>{
      setIsLoading(true)
      signOut(auth).then(() => {
        setUser({})
      })
      .finally(()=>setIsLoading(false))
      // .catch((error) => {
      //   // setError(error.message)
      // });
    }
    return{user,setUser,setError, error, signInWithGoogle, logOut, sendVerification, setIsLoading, isLoading,}
}

export default useFirebase;