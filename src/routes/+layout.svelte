<script>
	import '../app.css';
	import { page } from '$app/stores';

	$: pageName = $page.data.pageName;
	$: headerPhoto = $page.data.headerPhoto;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;600&display=swap"
		rel="stylesheet"
	/>
	<link rel="icon" type="image/svg+xml" href="/images/lotus_title.svg" />
	<title>YoYo Beauty & Massage</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div class="relative">
		<img
			src={headerPhoto}
			class="mx-auto mb-5 h-56 w-[48rem] object-cover md:h-72"
			alt="wellness massage"
		/>
		<div
			class:hidden={pageName === 'contact'}
			class:opacity-10={pageName !== 'contact'}
			class="absolute top-0 h-56 w-full bg-rose-100 md:hidden"
		/>
	</div>
	<div class="mb-4 flex flex-col items-center justify-center border-b-2 pb-2.5 md:block">
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
	<div class="mt-2 h-2 w-full max-w-3xl bg-gradient-to-b from-white to-slate-700" />
	<div class="w-full max-w-3xl bg-slate-700 text-slate-100">
		<div class="mx-7 pt-5 pb-4">
			<a href="/contact">
				<p class="font-bold">YoYo Beauty & Massage</p>
			</a>
			<p>'s-Gravendijkwal 145B</p>
			<p>3021 EL Rotterdam</p>
			<a href="tel:0687109280">
				<img
					class="mb-2 mt-2 inline-block h-4"
					src="/images/phone-active-slate.svg"
					alt="telefoon"
				/><span class="ml-1.5 font-bold">06-87109280</span>
			</a>
			<p class="mt-1.5">Maandag - zaterdag: 10:00 - 22:00</p>
			<p>Zondag: 12:00 - 20:00</p>
			<a href="/">
				<img class="ml-3.5 mt-2 h-16" src="/images/lotus.svg" alt="lotus bloem" />
			</a>
			<h3 class="text-slate-100">Tot Ziens!</h3>
		</div>
	</div>
</div>
