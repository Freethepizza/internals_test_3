import { ID, Users, Client } from 'node-appwrite';
import { useMainStore } from '~~/stores/mainStore';
import PocketBase from 'pocketbase';

export default defineEventHandler(async (e) => {
  const pb = new PocketBase('https://api.nowarlab.com');

  const body = await readBody(e);


  const data = {
    "username": body.test[0].name,
    "email": body.test[1].mail,
    "emailVisibility": true,
    "password": body.test[2].password,
    "passwordConfirm": body.test[2].password,
    "name": body.test[0].name
};
  try{
    const record = await pb.collection('users').create(data);
    return{
      record
    }
  } catch(err){
    return{
      err
    }
  }
  
  



  /*console.log('register get/post');
  const body = await readBody(e);
  const client = new Client()
    .setEndpoint('https://caronte.nowarlab.com/v1')
    .setProject('640634a41095e56572ba')
    .setKey('b74a226e0580b7271a275f789cfe65dbc0a3a2eb28ef38da32cf2bcf8b532d8840cef09351a817e2bc0ed7f833dfacc58d4802deb8097602cfd5400ab9a892b66a6906001ea5ead89c54f95e7d36f4f926efeb5c9ada846c4edac7e589f4ea166d755b871e5ebdcd9fbd65ef9a6d2d3fcafe4ed0586b5c0288df6c940458dc95');
  const users = new Users(client);
  try {
    const response = await users.create(
      ID.unique(),
      body.test[1].mail,
      null,
      body.test[2].password,
      body.test[0].name
    );
    return {
      message: response.status,
    };
  } catch (error) {
    console.log(error);
    return {
      message: error.type,
    };
  }*/
});