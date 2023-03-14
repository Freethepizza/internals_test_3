<template>
    <div class="_form">

        <div class="title">
            <h1>Login</h1>
        </div>

        <div class="field">
            <label for="mail">Mail</label>
            <input name="mail" type="text" @input="testMethod('mail', $event)">
        </div>

        <div class="field">
            <label for="pass">Password</label>
            <input name="pass" type="password" @input="testMethod('password', $event)">
        </div>

        <button class="btn_form_primary" @click="loginTest">Login</button>
    </div>
</template>

<script setup>
import { useMainStore } from '~~/stores/mainStore';


const mainStore = useMainStore();
const formValue = ref([]);

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

async function loginTest(){
  try {
    const data = await $fetch('/api/auth/login', {
      method: 'POST',
      body: { test:formValue.value },
    });
    console.log(data);
    mainStore.session = data.message;
    navigateTo("/");
  } catch (error) {
    console.error(error);
  } finally{

  }
}
</script>

<style scoped>
  @import url('~~/assets/forms.css');
</style>
