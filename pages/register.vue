<template>
    <div class="_form">
        <div class="title">
            <h1>Register</h1>
            <h2>{{ mainStore.loaded }}</h2>
        </div>

        <div class="field">
            <label for="name">Full Name</label>
            <input name="name" type="text"  @input="testMethod('name', $event)">
        </div>

        <div class="field">
            <label for="mail">Mail</label>
            <input name="mail" type="text" @input="testMethod('mail', $event)">
        </div>

        <div class="field">
            <label for="pass">Password</label>
            <input name="pass" type="password" @input="testMethod('password', $event)">
        </div>

        <button class="btn_form_primary" @click="registerTest">Register</button>
    </div>
</template>

<script setup>
import { useMainStore } from '~~/stores/mainStore';

const mainStore = useMainStore();


const formValue = ref([]);
console.log(formValue.value)
const testMethod = (t, e) => {
    //console.log(t,e.target.value)
    if (t === 'name') {
        formValue.value[0] = { 'name': e.target.value };
    } else if (t === 'mail') {
        formValue.value[1] = { 'mail': e.target.value };
    } else if (t === 'password') {
        formValue.value[2] = { 'password': e.target.value };
    }

}
async function registerTest() {
    mainStore.loaded = 'loading';
  try {
    const data = await $fetch('/api/auth/register', {
      method: 'POST',
      body: { test:formValue.value },
    });
    console.log(data); 
    if(data.message === 'user_already_exists'){
        alert('user exists!');
    }else if(data.message === true){
        alert('account created succesfully');
        navigateTo("/");
    }
  } catch (error) {
    console.error(error);
    //error.value = 'An error occurred while fetching the data';
  } finally{
    mainStore.loaded = 'loaded';
  }

    /*const { pending, data: posts } = useLazyFetch('/api/auth/register',{
        method:"POST",
        body:{
            test:formValue.value
        }
    })
    watch(posts, (newPosts) => {
        if(newPosts.message === true){
            console.log('emoganao');
            navigateTo("/");
        }
    })
    
    console.log(formValue.value)*/
}   
</script>

<style scoped>
@import url('~~/assets/forms.css');
</style>