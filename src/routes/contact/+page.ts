import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "contact",
    metaDescription: "Neem contact op met onze schoonheidssalon en laat ons u helpen om volledig tot rust te komen. Onze deskundige masseuses staan voor u klaar om u te adviseren en te helpen bij het kiezen van de perfecte behandeling. Kom langs bij onze salon en laat ons u verwennen met onze professionele behandelingen.",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fyoyo_massage_streetview_opt.jpg?alt=media&token=c1de27db-000f-4906-8345-a1769e23698a"
  };
}) satisfies PageLoad;