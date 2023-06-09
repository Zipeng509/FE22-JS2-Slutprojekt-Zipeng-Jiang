import { getUserPost, Post, removeUser } from "./firebase";
import { signOut } from "./signout";

const postContainerElement = document.getElementById("posts-container");
const signOutBtnElement = document.getElementById("sign-out-btn");
const usernameElement = document.getElementById("username-element");

if (!usernameElement) {
  throw new Error("No element was found with id of username-element");
}

if (!postContainerElement) {
  throw new Error(
    "No post container element was found with id 'posts-container' "
  );
}
if (!signOutBtnElement) {
  throw new Error(
    "No sign out button element was found with id 'sign-out-btn' "
  );
}


usernameElement.innerText = localStorage.getItem("signedInUser") ?? "";


signOutBtnElement.addEventListener('click', ()=>{
  signOut()
})

function postTemplate(post: Post) {
  return `
    <div class="card m-auto">
    <img src="${post.image}" class="card-img-top" />
    <div class="card-body">
      <h1 class="card-title">${post.title}</h1>
      <p class="card-text">
        ${post.description}
      </p>
      <p>${post.createdAt.toDateString()}</p>
    </div>
  </div>`;
}
 
const username = localStorage.getItem("visitedUser") ?? "";

getUserPost(username).then((posts) => {
  const postsHtml = posts.map(postTemplate).join("");
  postContainerElement.innerHTML = postsHtml;
});

