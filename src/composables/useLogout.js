import { firebase } from "@/firebase/config";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref } from "vue";

const auth = getAuth(firebase);
const error = ref(null);
const logout= async () =>{
await signOut(auth)
.then((res) => {
  error.value = null  
  console.log(res);
  return res
})
.catch((err) => {
 error.value =  err.message
})


}

const useLogout = () => {
    return {error, logout}
}

export default useLogout