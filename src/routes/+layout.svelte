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
	<div class="relative">
		<img
			src="https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fessential-oils-g0e1385797_1280.jpg?alt=media&token=87b0b9b5-1819-42fd-a7b0-d16b71ffdad3"
			class="mx-auto mb-5 h-52 w-[48rem] object-cover md:h-72"
			alt="wellness massage"
		/>
		<div class="absolute top-0 h-52 w-full bg-rose-100 opacity-40" />
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
