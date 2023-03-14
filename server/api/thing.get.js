import { useMainStore } from "~~/stores/mainStore";
import { usePocketbase
 } from "~~/composables/pocketbase";
export default defineEventHandler(async(e)=>{
    //console.log('hola mundo esto es el servidor');
    const pb = usePocketbase();
    const mainStore = useMainStore();
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(pb);
    mainStore.doStuff();
        
    const betterdata = [data[0],data[1],data[2],data[3]]

    return{
        status:200,
        message:betterdata
    };

    
});