<script>
	import {Nav} from 'svelte-chota';
	export let segment;
</script>

<Nav>
  <a slot="left" href="/app" class="brand">App Home</a>
  <a slot="left" href="/app/test">Test App Page</a>
  <a slot="left" class='{segment === "pages" ? "active" : ""}' href="pages/about">About</a>

  <a slot="right"  href="/app/account">My Account</a>
	<a slot="right"  href="/app/logout">Logout</a>
</Nav>