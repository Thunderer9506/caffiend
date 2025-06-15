import {useState,useEffect,useContext,createContext} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}


export function AuthProvider(props){
    const {children} = props
    const [globalUser,setGlobalUser] = useState(null)
    const [globalData,setGlobalData] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const value = {globalUser,globalData,setGlobalData,isLoading,signup,login,resetPassword,logout}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,async (user) => {
            console.log('Current User: ',user);
            setGlobalUser(user)
            if (!user) {
                console.log("No active user");
                
                return}
            try {
                setIsLoading(true)
                const docRef = doc(db,'users',user.uid)
                const docSnap = await getDoc(docRef)

                let firebaseData = {}
                if (docSnap.exists()) {
                    
                    firebaseData = docSnap.data()
                    console.log('Found user data',firebaseData);
                    
                }
                setGlobalData(firebaseData)
            } catch (error) {
                console.error(error);
            }
            finally {
                setIsLoading(false)
            }
        })
        return unsubscribe
    },[])

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth,email)
    }
    function logout(){
        setGlobalUser(null)
        setGlobalData(null)
        return signOut(auth)
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}