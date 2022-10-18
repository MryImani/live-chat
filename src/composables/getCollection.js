import { firebase, projectFireStore } from "@/firebase/config";
import { getFirestore, doc, onSnapshot, collection, getDocs } from "firebase/firestore";
import { ref, watchEffect } from "vue";
const db = getFirestore(firebase);

const getCollection = (dataCollection) => {
    const documents = ref(null)
    const error = ref(null)
    const unsubscribe = onSnapshot(
        collection(db, dataCollection),
        (snapshot) => {
            const result = [];
            snapshot.docs.forEach((doc) => {
                doc.data().createAt && result.push({ ...doc.data(), id: doc.id });
            })
            documents.value = result;
            error.value = null;
        },
        (err) => {
            documents.value = null;
            error.value = err.message
        });
    return { error, documents }

}

watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe() )
});

export default getCollection