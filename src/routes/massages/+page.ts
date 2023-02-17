import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "massages",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fbeauty-spa_opt.jpg?alt=media&token=b38a276d-ead9-40f5-9eaa-4033fa3a0a1f"
  };
}) satisfies PageLoad;