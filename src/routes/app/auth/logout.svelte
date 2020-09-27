<script>
import { goto, stores } from '@sapper/app';
import Cookie from 'js-cookie';
const { session } = stores();
Cookie.remove('user');
Cookie.remove('authToken');
$session.user = null;
$session.authToken = null;            
goto('/app')
</script>