import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "massages",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fpexels-anna-tarazevich-6560289.jpg?alt=media&token=2165eb8a-a953-4189-925d-95e34b9d5b69"
  };
}) satisfies PageLoad;