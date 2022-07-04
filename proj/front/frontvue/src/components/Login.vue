<template>
<div class="center">
    <h1>Login</h1>
    <form action="/login" method="post">
    <div class="txt_field">
        <input type="email" id="username" name="username" />
        <span></span>
        <label>Email</label>
    </div>
    <div class="txt_field">
        <input type="password" id="password" name="password"  />
        <span></span>
        <label>Password</label>
    </div>
    <input type="submit" value="Login">
    <div class="signup_link">
          Not a member? <a href="/register">Signup</a>
    </div>
 
     </form>
    
    </div>

</template>
<script>
    export default {
        name: 'LogV'
    }
</script>