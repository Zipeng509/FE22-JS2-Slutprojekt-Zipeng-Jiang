function signOut() {
  localStorage.removeItem("signedInUser");
  location.assign("./index.html")
  // open("http://localhost:1234", "_self");
}

export { signOut };
