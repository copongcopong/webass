<script>
import { goto, stores } from '@sapper/app';
import Cookie from 'js-cookie';
const { session } = stores();
	let email = '';
	let password = '';
  let errors = null;
  
  import axios from 'axios';
  async function submit(event) {
  const response = await axios.post(`/api/auth/login`, { email, password });
  // TODO handle network errors
      
      if(response.data && response.data.status == 'success') {
          var resp = response.data;
          
          $session.user = resp.data.user;
          $session.authToken = resp.data.authToken || null;
          var exp = {
            expires: resp.data.exp
          };
          Cookie.set('user', resp.data.user, exp);
          Cookie.set('authToken', resp.data.authToken, exp);
          goto('/app')
      }
	}
</script>
<div class="container">

    <!-- Outer Row -->
  <div class="row justify-content-center">
    <form class="user" on:submit|preventDefault={submit}>
      <div class="form-group">
        <input type="email" bind:value={email} class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address...">
      </div>
      <div class="form-group">
        <input type="password" bind:value={password} class="form-control form-control-user" id="exampleInputPassword" placeholder="Password">
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox small">
          <input type="checkbox" class="custom-control-input" id="customCheck">
          <label class="custom-control-label" for="customCheck">Remember Me</label>
        </div>
      </div>
      <button class="btn btn-primary btn-user btn-block" disabled='{!email || !password}'>
        Login
      </button>
    </form>
  </div>
</div>
				