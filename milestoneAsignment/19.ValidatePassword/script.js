// 19. Validate Password

// selecting the targets

function validateUser(e) {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let message = document.querySelector("#message");

  if (email === null || email.includes("@") === false) {
    message.innerText = "Invalid email or password!";
    message.style.color = "red";
  } else if (password === null || password.length < 8) {
    message.innerText = "Invalid email or password!";
    message.style.color = "red";
  } else {
    message.innerText = "Valid email and password!";
    message.style.color = "green";
  }
}

let submitBtn = document.querySelector("#btn");
submitBtn.addEventListener("click", validateUser);
