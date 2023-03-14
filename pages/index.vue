<template>
    <div>
    <h1>{{ mainStore.test }}</h1>
        <ul>
            <li>{{ items[0] }}</li>
            <li>{{ items[1]}}</li>
            <li>{{ items[2] }}</li>
            <li>{{ items[3] }}</li>
        </ul>
        
    </div>
</template>
  
<script setup>
import {useMainStore} from '../stores/mainStore';
let i = ['a','b','c'];
const items = ref('aa');

const mainStore = useMainStore();


/*const {data:data,error,refresh,pending} = await useAsyncData('thing',
    ()=>{
        return $fetch("/api/thing/")
    }
)*/


    //console.log(data._value.message)
    //items.value = data.value.message;


    onMounted(()=>{
        console.log(mainStore.test);
    })
    onBeforeMount(()=>{
        
    })

</script>

<style scoped>
li::first-letter{
    text-transform: capitalize;
}
</style>