import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "beauty",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fraphael-lovaski-Pe9IXUuC6QU-unsplash.jpg?alt=media&token=2dd3a408-e38b-4589-bdd1-c69a01098d8b"
  };
}) satisfies PageLoad;