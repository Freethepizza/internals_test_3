import { Client, Account } from "appwrite";
import { usePocketbase } from "~~/composables/pocketbase";

export default defineEventHandler(async (e)=>{
    const pb = usePocketbase();
    console.log(pb)

    return{
            message:pb.authStore
        }
    
    /*const client = new Client()
    .setEndpoint('https://caronte.nowarlab.com/v1')
    .setProject('640634a41095e56572ba')
    //.setKey('b74a226e0580b7271a275f789cfe65dbc0a3a2eb28ef38da32cf2bcf8b532d8840cef09351a817e2bc0ed7f833dfacc58d4802deb8097602cfd5400ab9a892b66a6906001ea5ead89c54f95e7d36f4f926efeb5c9ada846c4edac7e589f4ea166d755b871e5ebdcd9fbd65ef9a6d2d3fcafe4ed0586b5c0288df6c940458dc95')
    const account = new Account(client);  
    const cookie = getCookie(e,'session');


    console.log(account)
    console.log(cookie);
    if(cookie!=undefined){
        return{
            message:cookie
        }
    }else{
        return{
            message:'none'
        }
    }*/
    
})