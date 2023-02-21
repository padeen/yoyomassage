import type { PageLoad } from './$types';
 
export const load = (() => {
  return {
    pageName: "kamers",
    metaDescription: "Ontsnap aan de drukte van alledag en kom tot rust in onze prachtige kamers. Bij onze beauty massagesalon kunt u hemels genieten van rustgevende massages en ontspannende behandelingen. Laat u verwennen in onze luxe kamers, waar u zich kunt terugtrekken en helemaal kunt ontspannen. Ontdek ons ruime aanbod aan behandelingen en ervaar de kracht van onze professionele masseuses. Maak nu een afspraak en verwen uzelf met een onvergetelijk verblijf in onze beauty massagesalon.",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fessential-oils-g0e1385797_1280.jpg?alt=media&token=87b0b9b5-1819-42fd-a7b0-d16b71ffdad3"
  };
}) satisfies PageLoad;