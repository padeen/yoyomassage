import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "pedicure",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Ffoot-washing-spa-before-treatment-spa-treatment-product-female-feet-hand-spa_opt.jpg?alt=media&token=bdd4f9ed-9cec-4679-a9f3-f2f778eaa07c"
  };
}) satisfies PageLoad;