<script>
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div>
		<img
			src="https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fmasaaki-komori-_SbeCWYjwCQ-unsplash.jpg?alt=media&token=4ab2cabb-f939-41a2-9f12-7af3a1e8b253"
			class="mx-auto mb-8 h-64 w-[48rem] object-cover"
			alt="flower blossom"
		/>
	</div>
	<div class="flex flex-col items-center justify-center">
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
