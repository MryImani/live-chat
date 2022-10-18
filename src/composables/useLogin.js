import { firebase } from "@/firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const auth = getAuth(firebase);
const error = ref(null);
const login= async (email,password) =>{
await signInWithEmailAndPassword(auth , email , password)
.then((userCredential) => {
  error.value = null  
  console.log(userCredential);
  const user = userCredential.user;
  return user;
})
.catch((err) => {
 error.value =  err.message
})


}

const useLogin = () => {
    return {error, login}
}

export default useLogin