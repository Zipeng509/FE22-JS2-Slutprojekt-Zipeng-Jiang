import { signOut } from "./signout";
import { getAllUsers, getUserPost, User } from "./firebase";

const signOutBtnElement = document.getElementById("sign-out-btn");
const getAllUsersElement = document.getElementById("other-user-container");
const usernameElement = document.getElementById("username-element");


const signedInUser = localStorage.getItem("signedInUser") ?? "";

if (usernameElement) {
  usernameElement.innerText = localStorage.getItem("signedInUser") ?? "";
}

signOutBtnElement?.addEventListener("click", () => {
  signOut();
});

async function otherUserTemplate(user: User) {
  const postAmount = (await getUserPost(user.name)).length;
  return `
  <div class="col col-md-9 col-lg-7 col-xl-5 m-auto">
    <div class="card" style="border-radius: 15px">
      <div class="card-body p-4">
        <div class="d-flex text-black">
          <div class="flex-shrink-0">
            <img
              src="${user.image}"
              class="img-fluid"
              style="width: 180px; border-radius: 10px"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <h5 class="mb-1">${user.name}</h5>
            <div
              class="d-flex justify-content-start rounded-3 p-2 mb-2"
              style="background-color: #efefef"
            >
              <div>
                <p class="small text-muted mb-1">Articles</p>
                <p class="mb-0">${postAmount}</p>
              </div>
            </div>
            <div class="d-flex pt-1">
              <button 
                id="${user.name}-btn"
                type="button"
                class="btn btn-outline-primary me-1 flex-grow-1"
              >
                Go to profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

getAllUsers().then(async (users) => {
  if (getAllUsersElement) {
    users = users.filter(user => user.name !== signedInUser)
    const usersHtml = (await Promise.all(users.map(otherUserTemplate))).join(
      ""
    );
    getAllUsersElement.innerHTML = usersHtml;
    users.map((user) => {
      const goToProfileBtnElement = document.getElementById(
        user.name + "-btn"
      ) as HTMLButtonElement;
      goToProfileBtnElement.addEventListener("click", () => {
        localStorage.setItem("visitedUser", user.name);
        open("http://localhost:1234/src/html/otherusersprofile.html", "_self");
      });
    });
  }
});
