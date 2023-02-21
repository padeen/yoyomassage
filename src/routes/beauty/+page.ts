import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "beauty",
    metaDescription: "Ontdek de ultieme verwennerij voor uw huid met onze luxueuze gezichtsbehandelingen bij onze schoonheidssalon. Geniet van een ontspannende gezichtsreiniging en verjongende gezichtsmaskers die uw huid weer stralend en gezond maken. Maak nu een afspraak bij onze salon en ervaar de kracht van onze gezichtsbehandelingen.",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fraphael-lovaski-Pe9IXUuC6QU-unsplash.jpg?alt=media&token=2dd3a408-e38b-4589-bdd1-c69a01098d8b"
  };
}) satisfies PageLoad;