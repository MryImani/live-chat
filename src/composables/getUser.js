import { firebase } from "@/firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const auth = getAuth(firebase);
const user = ref(auth.currentUser);
 auth.onAuthStateChanged( _user => {
    console.log('user state change . current user is :' , _user);
    if(_user)
    {
     _user.displayName = _user.email.split("@")[0];
    }
 
    user.value = _user
 })

 const getUser = () => {
    return { user}
 }

 export default getUser