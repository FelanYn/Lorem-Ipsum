<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login / Registration</title>
  <script async defer crossorigin="anonymous" 
    src="https://connect.facebook.net/en_US/sdk.js"></script>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: auto; padding: 20px; }
    input, button { width: 100%; padding: 10px; margin: 10px 0; }
    .fb-btn { background-color: #3b5998; color: white; border: none; }
  </style>
</head>
<body>

  <h2>Login / Register</h2>

  <form id="email-form">
    <input type="email" id="email" placeholder="Email" required />
    <input type="password" id="password" placeholder="Password" required />
    <button type="submit">Login/Register with Email</button>
  </form>

  <hr>

  <button class="fb-btn" onclick="fbLogin()">Login with Facebook</button>

  <script>
    // Email form submission
    document.getElementById("email-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      // TODO: Replace with actual API call to backend
      console.log("Email login:", { email, password });

      alert("Email login/registration sent to backend!");
    });

    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
      FB.init({
        appId      : 'YOUR_FACEBOOK_APP_ID',
        cookie     : true,
        xfbml      : true,
        version    : 'v18.0'
      });
    };

    // Facebook login function
    function fbLogin() {
      FB.login(function(response) {
        if (response.authResponse) {
          FB.api('/me', { fields: 'name,email' }, function(profile) {
            console.log("Facebook login:", profile);
            alert("Welcome " + profile.name + "!");
            // TODO: Send profile info to your backend
          });
        } else {
          alert("Facebook login failed or cancelled.");
        }
      }, { scope: 'public_profile,email' });
    }
  </script>

</body>
</html>
