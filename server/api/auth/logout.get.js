import { usePocketbase } from "~~/composables/pocketbase";

export default defineEventHandler((e)=>{
    const pb = usePocketbase();
    pb.authStore.clear();
    return{
        message:'success'
    }
})