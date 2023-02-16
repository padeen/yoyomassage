import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "pedicure",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Frune-enstad-qeuJczNo54w-unsplash.jpg?alt=media&token=dabd704a-91b7-4a13-8a9a-dd50712cfce3"
  };
}) satisfies PageLoad;