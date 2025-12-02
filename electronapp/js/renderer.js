const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => {
  // Real Passwords and usernames
  const real_username = "RosaMaria";
  const real_password = "YairaGala";

  // Get elements from html source
  const $username_session_input = $("#username_session");
  const $password_session_input = $("#password_session");
  const $form = $("#login_form");

  let $login_text = $("#succesful_login");

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    if ($username_session_input.value == real_username && $password_session_input.value == real_password)
    {
      console.log("bien hecho");
       $login_text.classList.add("status_login");
       $login_text.classList.remove("status_error");
       $login_text.textContent = "Logging in...";
       setTimeout(() => {
         window.location.href = '/home/naim/dev/electronapp/html/mainDogPage.html';
       }, 2000)
     
    }else{
      $login_text.classList.add("status_error");
      $login_text.classList.remove("status_login");
      $login_text.textContent = "Wrong credentials";
    }
  });
  })
  
