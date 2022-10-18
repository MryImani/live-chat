
import { firebase } from '@/firebase/config';
import { ref } from '@vue/reactivity'
import { getAuth, createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";


const error = ref(null)
const signup = async (email, password, displayName) => {
    try {
        const auth = getAuth(firebase);
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error('Could not complete the signup')
        }
        res.user.displayName = displayName;
        error.value = null;
        console.log(res.user);
        return res

    }
    catch (err) {
        console.log(err.message);
        error.value = err.message
    }

}

const useSignup = () => {
    return { error, signup }
}
export default useSignup