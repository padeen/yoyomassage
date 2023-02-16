import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "home",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fessential-oils-g0e1385797_1280.jpg?alt=media&token=87b0b9b5-1819-42fd-a7b0-d16b71ffdad3"
  };
}) satisfies PageLoad;