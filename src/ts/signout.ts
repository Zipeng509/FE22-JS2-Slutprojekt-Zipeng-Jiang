function signOut() {
  localStorage.removeItem("signedInUser");
  open("http://localhost:1234", "_self");
}

export { signOut };
