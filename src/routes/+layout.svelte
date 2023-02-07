<script>
	import '../app.css';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		hideResponsiveMenu = true;
	});

	let hideResponsiveMenu = true;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="mb-5 flex flex-col items-center justify-center">
	<button
		on:click={() => (hideResponsiveMenu = !hideResponsiveMenu)}
		class="absolute -top-1 right-0 z-10 w-16 rounded border bg-white px-4 py-3 opacity-70 md:hidden"
	>
		<img src="/images/bars-solid.svg" alt="hamburger-icon" />
	</button>
	<div>
		<img
			src="https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fmasaaki-komori-_SbeCWYjwCQ-unsplash.jpg?alt=media&token=4ab2cabb-f939-41a2-9f12-7af3a1e8b253"
			class="mx-auto mb-5 h-52 w-[48rem] object-cover md:h-56"
			alt="flower blossom"
		/>
	</div>
	<div
		class:hidden={hideResponsiveMenu}
		class="mb-4 flex flex-col items-center justify-center border-b-2 pb-2.5 md:block"
	>
		<div>
			<a href="/">Welkom</a>
		</div>
		<div>
			<a href="/massages">Massages</a>
		</div>
		<div>
			<a href="/beauty">Beauty</a>
		</div>
		<div>
			<a href="/pedicure">Pedicure</a>
		</div>
		<div>
			<a href="/kamers">Kamers</a>
		</div>
		<div>
			<a href="/prijzen">Prijzen</a>
		</div>
		<div>
			<a href="/contact">Contact</a>
		</div>
	</div>
	<slot />
</div>
