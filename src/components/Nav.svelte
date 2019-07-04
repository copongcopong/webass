<script>
import { stores } from '@sapper/app';
import NavPrivate from './app/Nav.svelte';
import NavPublic from './NavPublic.svelte';
const { preloading, page, session } = stores();
export let segment;
</script>
<header>
{#if $session.user && segment === 'app' }
<NavPrivate {segment}/>
{:else if segment !== 'app' && segment !== 'api'}
<NavPublic {segment} />
{/if}
</header>