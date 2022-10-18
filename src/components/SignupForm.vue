<template>
  <form @submit.prevent="submitHandle">
   <input type="text" required placeholder="Display name" v-model="displayName">
   <input type="email" required placeholder="Email" v-model="email">
   <input type="password" required placeholder="Password" v-model="password">
   <div class="error">{{error}}</div>
   <button>Sign Up</button>
  </form>
</template>

<script>
import useSignup from '@/composables/useSignup';
import { ref } from '@vue/reactivity'
export default {
  setup(props , context ){
    const displayName = ref('');
    const email = ref('');
    const password = ref('');
    const {error , signup} = useSignup()
    const submitHandle= async () => {
    await signup(email.value, password.value, displayName.value);
     if(!error.value)
     {
      context.emit('signup')
     }
    }

    return {displayName, email , password, submitHandle,error}
  }
}
</script>

<style>

</style>