import { useMainStore } from "~~/stores/mainStore";
import { usePocketbase } from "~~/composables/pocketbase";
export default defineEventHandler((e)=>{
    //const mainStore = useMainStore();
    const pb = usePocketbase();
    console.log(pb);
})