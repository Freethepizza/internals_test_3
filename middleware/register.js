export default defineNuxtRouteMiddleware((e) =>{
    //return navigateTo("/");
    //console.log(to)
    $fetch('/api/auth/check')
})