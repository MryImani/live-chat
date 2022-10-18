<template>
  <form>
    <textarea
      @keypress.enter.prevent="submitHandle"
      placeholder="type a message and hit enter to send..."
      v-model="message"
    ></textarea>
    <div class="error"> {{ error}}</div>
  </form>
</template>

<script>
import getUser from "@/composables/getUser";
import useCollection from '@/composables/useCollection'
import { timestamp } from "@/firebase/config";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { error , addDocu } = useCollection('messages')
    const submitHandle = async () => {
        const chat={
            user: user.value.displayName,
            message : message.value,
            createAt : timestamp
        }
      await addDocu(chat)
      if(!error.value)
      {
        message.value = ''
      }  
       
    };

    return { submitHandle , message , error}
  },
};
</script>

<style scoped>
form{
    margin: 10px;
}
textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>