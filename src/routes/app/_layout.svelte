<script context="module">
    import {noauth} from './_config.js';
	export async function preload(page, session) {
        
        if((!session || !session.user) && noauth.indexOf(page.path) < 0) {
            return this.redirect(302, 'app/login');
        }
        if(session && session.user && page.path === '/app/login') {
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
<script>

import 'startbootstrap-sb-admin-2/css/sb-admin-2.css';
</script>

<slot></slot>