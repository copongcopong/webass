<script>
	import {Nav} from 'svelte-chota';
	export let segment;
</script>

<Nav>
  <a slot="left" href="/" class="brand">WebAss</a>
  <a slot="left" class='{segment === "pages" ? "active" : ""}' href="pages/about">About</a>
  <a slot="left" class='{segment === "blog" ? "active" : ""}' href="blog">Blog</a>
	
	<a slot="right" href="app">App</a>
</Nav>