import "bootstrap";

import { createUser } from "./firebase";
const usernameInputElement = document.getElementById(
  "username"
) as HTMLInputElement | null;
const passwordInputElement = document.getElementById(
  "password"
) as HTMLInputElement | null;
const signUpBtn = document.getElementById(
  "signUpBtn"
) as HTMLButtonElement | null;

const mozartImgElement = document.getElementById(
  "img-mozart"
) as HTMLImageElement;
const beethovenImgElement = document.getElementById(
  "img-beethoven"
) as HTMLImageElement;
const wagnerImgElement = document.getElementById(
  "img-wagner"
) as HTMLImageElement;

if (!signUpBtn) {
  throw new Error("No button element was found with id of 'signUpBtn'");
}
if (!usernameInputElement) {
  throw new Error("No input element was found with id of 'username'");
}
if (!passwordInputElement) {
  throw new Error("No input element was found with id of 'password'");
}
if (!mozartImgElement) {
  throw new Error("No img element was found with id of img-mozart");
}
if (!beethovenImgElement) {
  throw new Error("No img element was found with id of img-beethoven");
}
if (!wagnerImgElement) {
  throw new Error("No img element was found with id of img-wagner");
}

let imgChoose = "";

mozartImgElement.addEventListener("click", () => {
  mozartImgElement.classList.add("img-active");
  beethovenImgElement.classList.remove("img-active");
  wagnerImgElement.classList.remove("img-active");
  imgChoose = mozartImgElement.src;
});
beethovenImgElement.addEventListener("click", () => {
  mozartImgElement.classList.remove("img-active");
  beethovenImgElement.classList.add("img-active");
  wagnerImgElement.classList.remove("img-active");
  imgChoose = beethovenImgElement.src;
});
wagnerImgElement.addEventListener("click", () => {
  mozartImgElement.classList.remove("img-active");
  beethovenImgElement.classList.remove("img-active");
  wagnerImgElement.classList.add("img-active");
  imgChoose = wagnerImgElement.src;
});

signUpBtn.addEventListener("click", async (event) => {
  if (imgChoose === "") {
    alert("You have to choose a profile picture");
    return;
  }

  const username = usernameInputElement.value;
  if (username === "") {
    alert("Please fill in your username");
    return;
  }

  const password = passwordInputElement.value;
  if (password === "") {
    alert("Please fill in your password");
    return;
  }

  await createUser(
    username,
    password,
    imgChoose,
    () => {
      localStorage.setItem("signedInUser", username)
      open("http://localhost:1234/src/html/homepage.html", "_self");
    },
    () => {
      alert("User already exists");
    }
  );
});
