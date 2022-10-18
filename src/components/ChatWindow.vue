<template>
    <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documentsFormate" ref="messages" class="messages">
      <div v-for="doc in documentsFormate" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createAt }}</span>
        <span class="user">{{ doc.user }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import { computed, onUpdated, ref } from '@vue/runtime-core'
import {formatDistanceToNow} from 'date-fns'
export default {
setup(){
    const {error , documents} = getCollection('messages')
    const messages = ref(null)
    const documentsFormate= computed(() => {
     if(documents.value)
     {
        return documents.value.map(doc => {
            let time= formatDistanceToNow(doc.createAt.toDate())
            return {...doc, createAt : time}
        });
     }
    });


   onUpdated(() => {
     messages.value.scrollTop = messages.value.scrollHeight
   });

    return {error , documents , documentsFormate, messages}
}
}
</script>

<style>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    text-align: left;
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .user {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>