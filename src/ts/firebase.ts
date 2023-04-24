import { FirebaseApp, initializeApp } from "firebase/app";
import { getDatabase, get, ref, set, remove } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL:
    "https://js2-slutprojekt-zipeng-jiang-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
let app: FirebaseApp | undefined;
if (!app) {
  app = initializeApp(firebaseConfig);
}

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

type User = {
  name: string;
  password: string;
  image: string;
};

//Skapar användare
async function createUser(
  name: string,
  password: string,
  image: string,
  successCallback: () => void,
  failureCallback: () => void
): Promise<void> {
  if (await isUserNameAlreadyExisting(name)) {
    failureCallback();
    return;
  }
  await set(ref(database, "users/" + name), {
    name,
    password,
    image,
  });
  successCallback();
}

//Kasta en error om användare redan existera
async function isUserNameAlreadyExisting(name: string): Promise<boolean> {
  const snapshot = await get(ref(database, "users/" + name));
  const user: User | null = snapshot.val();
  return user?.name === name;
}

//Radera användare
async function removeUser(name: string): Promise<void> {
  await remove(ref(database, "users/" + name));
}

//Får alla användare
async function getAllUsers(): Promise<User[]> {
  const snapshot = await get(ref(database, "users/"));
  if (!snapshot.exists()) {
    throw new Error("All users not found");
  }
  const allUsersPost = snapshot.val();
  return Object.values(allUsersPost);
}

//Logga in
async function signIn(
  name: string,
  password: string,
  callback: () => void
): Promise<void> {
  const snapshot = await get(ref(database, "users/" + name));
  if (!snapshot.exists()) {
    throw new Error("Username not found");
  }

  const user: User = snapshot.val();
  const isSignedIn = user.password === password;
  if (isSignedIn) {
    callback();
  }
}

type Post = {
  title: string;
  image: string;
  description: string;
  createdAt: Date;
};

//Skapar inlägg
async function createPost(name: string, post: Post): Promise<void> {
  await set(ref(database, "post/" + name + "/" + post.title), {
    ...post,
    createdAt: post.createdAt.toISOString(),
  });
}

//Ta emot andra användares inlägg
async function getUserPost(name: string): Promise<Post[]> {
  const snapshot = await get(ref(database, "post/" + name));
  if (!snapshot.exists()) {
    return []
  }

  const userPost: Post[] = Object.values(snapshot.val() || {});
  console.log(snapshot.val());
  return userPost
    .map((post) => ({ ...post, createdAt: new Date(post.createdAt) }))
    .sort((a, b) => {
      if (a.createdAt.getDate() < b.createdAt.getDate()) {
        return 1;
      } else if (a.createdAt.getDate() > b.createdAt.getDate()) {
        return -1;
      }
      return 0;
    });
}

export {
  signIn,
  createUser,
  getUserPost,
  createPost,
  Post,
  removeUser,
  getAllUsers,
  User,
};
