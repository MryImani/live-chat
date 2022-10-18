<template>
  <div class="container">
    <navbar></navbar>
    <chat-window></chat-window>
    <new-chat></new-chat>
   
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NewChat from '@/components/NewchatFrom.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "@vue/runtime-core";
export default {
  components: {
    Navbar,
    NewChat,
    ChatWindow
  },
  setup(props, context) {
    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style>
</style>