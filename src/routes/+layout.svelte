<script>
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	$: pageName = $page.data.pageName;
	$: headerPhoto = $page.data.headerPhoto;

	afterNavigate(() => {
		hideResponsiveMenu = true;
	});

	let hideResponsiveMenu = true;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;600&display=swap"
		rel="stylesheet"
	/>
	<title>YoYo Beauty & Massage</title>
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
			src={headerPhoto}
			class="mx-auto mb-5 h-52 w-[48rem] object-cover md:h-72"
			alt="wellness massage"
		/>
		<div
			class:hidden={pageName === 'contact'}
			class="absolute top-0 h-52 w-full bg-rose-100 opacity-40"
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
