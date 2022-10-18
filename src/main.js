import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/css/main.css'
import {getAuth} from 'firebase/auth'
import {firebase} from '@/firebase/config'

const auth= getAuth(firebase);
let app 

auth.onAuthStateChanged(() => {
    if(!app)
    {
        app = createApp(App).use(router).mount('#app')

    }
});

