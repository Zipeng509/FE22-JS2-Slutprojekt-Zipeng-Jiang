import { createPost } from "./firebase";
import { signOut } from "./signout";

const imageUrlElement = document.getElementById(
  "img-url-input"
) as HTMLInputElement;
const titleElement = document.getElementById("title-input") as HTMLInputElement;
const textElement = document.getElementById("text-input") as HTMLInputElement;
const createPostBtn = document.getElementById(
  "create-post-btn"
) as HTMLButtonElement;
const signOutBtnElement = document.getElementById("sign-out-btn");
const usernameElement = document.getElementById("username-element");
if (!usernameElement) {
  throw new Error("No element was found with id of username-element");
}
if (!imageUrlElement) {
  throw new Error("No image element was found with id of image-url-input");
}
if (!titleElement) {
  throw new Error("No title element was found with id of title-input");
}
if (!textElement) {
  throw new Error("No text element was found with id of text-input");
}
if (!createPostBtn) {
  throw new Error("No button element was found with id of create-post-btn");
}
if (!signOutBtnElement) {
  throw new Error(
    "No sign out button element was found with id 'sign-out-btn' "
  );
}
usernameElement.innerText = localStorage.getItem("signedInUser") ?? "";

signOutBtnElement.addEventListener("click", () => {
  signOut();
});

createPostBtn.addEventListener("click", async () => {
  if (imageUrlElement.value === "") {
    alert("Please fill in image url");
    return;
  }
  if (titleElement.value === "") {
    alert("Please fill in title");
    return;
  }
  if (textElement.value === "") {
    alert("Please fill in text");
    return;
  }
  const username = localStorage.getItem("signedInUser") ?? "";

  await createPost(username, {
    title: titleElement.value,
    image: imageUrlElement.value,
    description: textElement.value,
    createdAt: new Date(),
  });
  imageUrlElement.value = "";
  titleElement.value = "";
  textElement.value = "";
});
