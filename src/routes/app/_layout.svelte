<script>
import { Container } from "svelte-chota";

</script>
<script context="module">
  import {noauth} from './_config.js';
	export async function preload(page, session) {
        
    if((!session || !session.user) && noauth.indexOf(page.path) < 0) {
        return this.redirect(302, 'app/auth/login');
    }
    if(session && session.user && page.path === '/app/auth/login') {
        return this.redirect(302, 'app');
    }

    console.log(['App Preload', page, session])

    if((!session || !session.user)) {
        return {shownav: false}
    } else {
        return {session: session, shownav: true}
    }
    
        
  }
</script>

<svelte:head>
</svelte:head>

<slot></slot>
