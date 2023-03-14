import PocketBase from 'pocketbase';
import { usePocketbase } from '~~/composables/pocketbase';

export default defineEventHandler(async (e) => {
  const body = await readBody(e);


  const pb = usePocketbase();//new PocketBase('https://api.nowarlab.com');
  const authData = await pb.collection('users').authWithPassword(body.test[1].mail, body.test[2].password);
  console.log(authData);
  
  //pb.authStore.exportToCookie({ httpOnly: false });

  return{
    authData,
    "a":pb.authStore
  }
});