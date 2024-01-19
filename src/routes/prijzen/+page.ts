import type { PageLoad } from './$types';
export const prerender = true;

export const load = (() => {
  return {
    pageName: "prijzen",
    metaDescription: "Bij onze beauty massagesalon bieden we professionele behandelingen tegen zachte prijzen. Bekijk onze prijslijst voor een overzicht van onze behandelingen, waaronder massages, gezichtsbehandelingen, pedicure en meer. Wij geloven dat iedereen recht heeft op de beste zorg voor zijn of haar lichaam, daarom bieden wij top kwaliteit tegen een zachte prijs. Ontdek onze prijzen en maak nu een afspraak bij onze salon.",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fessential-oils-g0e1385797_1280.jpg?alt=media&token=87b0b9b5-1819-42fd-a7b0-d16b71ffdad3"
  };
}) satisfies PageLoad;