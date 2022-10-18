<template>
  <nav >
    <div>
        <p>Hey {{ user.displayName}}</p>
        <p>Current email is {{ user.email}}</p>
    </div>
    <button @click="handleclick">Log Out</button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
export default {
setup(){

 const router= useRouter();  
 const {error , logout} = useLogout() 
 const { user } = getUser()
 const handleclick = async () => {
    await logout();
 } 
 
 return {handleclick , user}
}
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }

</style>