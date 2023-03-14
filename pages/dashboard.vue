<template>
    <h1>This is the dashboard</h1>
    <button @click="logout">log out</button>
</template>

<script setup>
    const pb = usePocketbase()
    const {data:data,error,refresh,pending} =  await useAsyncData('check',
    ()=>{
        return $fetch("/api/auth/check");
    });

    console.log(data._value.message);

    const logout = ()=> {
        const data = $fetch('/api/auth/logout');
        data.then((res)=>{
            console.log(res)
        })
    }
</script>