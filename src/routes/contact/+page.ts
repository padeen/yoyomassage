import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "contact",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fyoyo_massage_streetview_opt.jpg?alt=media&token=c1de27db-000f-4906-8345-a1769e23698a"
  };
}) satisfies PageLoad;