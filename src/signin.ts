import "bootstrap";

import { signIn } from "./firebase";

const usernameInputElement = document.getElementById(
  "username"
) as HTMLInputElement | null;
const passwordInputElement = document.getElementById(
  "password"
) as HTMLInputElement | null;
const signInBtn = document.getElementById(
  "signInBtn"
) as HTMLButtonElement | null;

if (!signInBtn) {
  throw new Error("No button element was found with id of 'signInBtn'");
}
if (!usernameInputElement) {
  throw new Error("No input element was found with id of 'username'");
}
if (!passwordInputElement) {
  throw new Error("No input element was found with id of 'password'");
}


signInBtn.addEventListener("click", () => {
  const username = usernameInputElement.value;
  const password = passwordInputElement.value;
  if (username === "") {
    alert("Please fill in your username")
    return;
  }
 
  if (password === "") {
    alert("Please fill in your password")
    return;
  }

  signIn(username, password, () => {
    localStorage.setItem("signedInUser", username)
    open("./homepage.html", "_self");
  });
});
