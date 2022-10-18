import { firebase, projectFireStore } from "@/firebase/config";
import { getFirestore } from "firebase/firestore";
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
const db = getFirestore(firebase);
const useCollection = (dataCollection) => {
    const error = ref(null);
    const addDocu = async (doc) => {

        await addDoc(collection(db, dataCollection), doc)
            .then(() => {
                console.log("Document written with ID: ");
            })
            .catch((err) => {
                error.value = err.message
            })
    }

    return { error, addDocu }
}

export default useCollection