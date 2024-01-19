import type { PageLoad } from './$types';
export const prerender = true;

export const load = (() => {
  return {
    pageName: "massages",
    metaDescription: "Ontsnap aan de dagelijkse stress en geniet van onze luxueuze massages bij onze schoonheidssalon. Of u nu op zoek bent naar een ontspanningsmassage, een stevige sportmassage of een herstellende voetmassage, onze ervaren masseuses zullen u verwennen en uw lichaam en geest verjongen. Ontdek ons aanbod van massagebehandelingen en maak vandaag nog een afspraak bij onze salon.",
    headerPhoto: "https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fbeauty-spa_opt.jpg?alt=media&token=b38a276d-ead9-40f5-9eaa-4033fa3a0a1f"
  };
}) satisfies PageLoad;