<script>
	import Nav from '../components/Nav.svelte';
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
		font-size: 1em;
		text-transform: uppercase;
		font-weight: 400;
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
	.content p {
		text-align: left;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>


<main>
<figure>
	<img alt='kid' src='successkid.jpg'>
</figure>


	<div class="content">
		<h2>How does WebAss works?</h2>

	<p>WebAss leverages the server component of Sapper to create <strong title="Requires Login to access parts of the site.">protected</strong> parts/pages of the stack.</p>
	<p>To test, click on <a href="/app">app</a> in the navigation. You will be prompted to login. Use any email and password. You are now able to access the protected parts of the site.</p>
	<p>Logout, and try to access the protected pages like: <a href="/app/test">/app/test</a>, redirects you back to the login page.</p>
	<p>For more info, visit: <a href="https://github.com/copongcopong/webass">https://github.com/copongcopong/webass</a></p>
	</div>
</main>