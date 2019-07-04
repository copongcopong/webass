<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>
<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>


<main>
<h1>Great success!</h1>

<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing,,, this file (src/routes/index.svelte) to test live reloading.</strong>
<a href="/app">Go to App</a>
</p>
</main>