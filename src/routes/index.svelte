<style>
  :global(:root) {
      --color-primary: #14854F;
      --color-lightGrey: #d2d6dd;
      --color-grey: #747681;
      --color-darkGrey: #3f4144;
      --color-error: #d43939;
      --color-success: #28bd14;
      --grid-maxWidth: 120rem;
      --grid-gutter: 2rem;
      --font-size: 1.6rem;
      --font-family: "Helvetica Neue", sans-serif;
  }
</style>

<svelte:head>
	<title>WebAss</title>
</svelte:head>
<script>
  import {Container} from 'svelte-chota';
</script>

<Container>
  <h2>How does WebAss works?</h2>		
  <p>WebAss leverages the server component of Sapper to create <strong title="Requires Login to access parts of the site.">protected</strong> parts/pages of the stack.</p>
  <p>To test, click on <a href="/app">app</a> in the navigation. You will be prompted to login. Use any email and password. You are now able to access the protected parts of the site.</p>
  <p>Logout, and try to access the protected pages like: <a href="/app/test">/app/test</a>, redirects you back to the login page.</p>
  <p>For more info, visit: <a class="text-primary" href="https://github.com/copongcopong/webass">https://github.com/copongcopong/webass</a></p>
    
  <p>Uses <a class="text-primary" href="https://alexxnb.github.io/svelte-chota">SvelteChota</a> for UI component.</p>

</Container>
