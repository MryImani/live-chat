<template>
  <div class="container welcome">
    <p>Welcome</p>
    <div v-if="showLogin">
     <h2>Login</h2>
     <login @login="enterChatroom"></login>
     <p>No Account Yet? <span @click="showLogin = !showLogin">Sign Up</span></p>
    </div>
    <div v-else>
        <h2>Sign Up</h2>
        <sign-up @signup="enterChatroom"></sign-up>
        <p>Already Registered? <span @click="showLogin = !showLogin">Login</span></p>
    </div>
    
    

  </div>
</template>

<script>
    import SignUp from '@/components/SignupForm.vue'
    import Login from '@/components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
components :{
    SignUp , 
    Login
}
,
setup(){
    const showLogin = ref(true);
    const router = useRouter();

    const enterChatroom = () => {
        router.push({ name:'Chatroom'});
    }

    return{showLogin , enterChatroom}
}
}
</script>

<style>
.welcome{
    padding: 20px 0;
    text-align: center;
}
.welcome form{
    width: 300px;
    margin: 20px auto;
}
.welcome label{
    display: block;
    margin: 20px 0 10px;
}
.welcome input{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
    box-sizing: border-box;
}
.welcome span{
    text-decoration: underline;
    font-weight: bold;
    color: #5ae4ca;
    cursor: pointer;
}
.welcome button{
    margin: 20px auto;
}
</style>