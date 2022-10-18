import { createRouter, createWebHistory } from 'vue-router'
import { firebase } from "@/firebase/config";
import { getAuth} from "firebase/auth";
import Welcome from '@/views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'

const requiredAuthenticate=(to , from , next) => {
  const auth= getAuth(firebase);
 let user = auth.currentUser;
 console.log('current user is :' , user);
 if(!user)
 {
  next({ name : 'Welcome'})
 }
 else {
  next()
 }
}

const requiredNoAuthenticate=(to , from , next) => {
  const auth= getAuth(firebase);
 let user = auth.currentUser;
 if(user)
 {
  next({ name : 'Chatroom'})
 }
 else {
  next()
 }
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter : requiredNoAuthenticate
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter : requiredAuthenticate
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
