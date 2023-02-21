import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "pedicure",
    metaDescription: "Verwen uw voeten met onze professionele pedicurebehandelingen bij onze schoonheidssalon. Geniet van een ontspannende pedicure en een revitaliserend voetenbad met Chinese kruiden om uw voeten te verzorgen en te verwennen. Onze deskundige pedicure-specialisten bieden u een persoonlijke en op maat gemaakte behandeling die past bij uw individuele behoeften. Maak nu een afspraak bij onze salon en ervaar de verbeterende kracht van onze pedicurebehandelingen.",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Ffoot-washing-spa-before-treatment-spa-treatment-product-female-feet-hand-spa_opt.jpg?alt=media&token=bdd4f9ed-9cec-4679-a9f3-f2f778eaa07c"
  };
}) satisfies PageLoad;