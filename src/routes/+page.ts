import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "home",
    metaDescription: "Ontspan en verwen jezelf met de luxe behandelingen van onze schoonheidssalon. Geniet van ontspanningsmassages, gezichtsbehandelingen, en pedicures in een rustige en sfeervolle omgeving. Onze deskundige masseuses zorgen voor een unieke ervaring die je lichaam en geest tot rust zullen brengen. Maak nu een afspraak bij onze salon en ervaar de ultieme schoonheids- en wellnessbehandelingen waardoor u zich mooi en ontspannen voelt.",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fessential-oils-g0e1385797_1280.jpg?alt=media&token=87b0b9b5-1819-42fd-a7b0-d16b71ffdad3"
  };
}) satisfies PageLoad;