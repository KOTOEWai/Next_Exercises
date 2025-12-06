// lib/secrets.js
import 'server-only'; // ဤ file ကို client component က import လုပ်ပါက build error ပြမည်။

export const ServersideFunction = () => {
  console.log(`use multiple libraries ,
               use server component,
               interact with a database,
               process confidential data,
               and more!`);
   return 'ServersideFunction'
}