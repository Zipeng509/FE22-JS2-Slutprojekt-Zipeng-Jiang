var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire0b32;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire0b32=o);var r=o("fASYj");const i=document.getElementById("posts-container"),s=document.getElementById("sign-out-btn"),d=document.getElementById("delete-btn"),l=document.getElementById("username-element");if(!l)throw new Error("No element was found with id of username-element");if(!i)throw new Error("No post container element was found with id 'posts-container' ");if(!s)throw new Error("No sign out button element was found with id 'sign-out-btn' ");if(!d)throw new Error("No removeUserElement was found with id 'delete-btn'");function a(e){return`\n    <div class="card m-auto">\n    <img src="${e.image}" class="card-img-top" />\n    <div class="card-body">\n      <h1 class="card-title">${e.title}</h1>\n      <p class="card-text">\n        ${e.description}\n      </p>\n      <p>${e.createdAt.toDateString()}</p>\n    </div>\n  </div>`}l.innerText=localStorage.getItem("signedInUser")??"",d.addEventListener("click",(()=>{(0,r.removeUser)(c),location.assign("./index.html"),alert("Account Deleted Successfully")})),s.addEventListener("click",(()=>{localStorage.removeItem("signedInUser"),location.assign("./index.html")}));const c=localStorage.getItem("signedInUser")??"";(0,r.getUserPost)(c).then((e=>{const n=e.map(a).join("");i.innerHTML=n}));
//# sourceMappingURL=homepage.f25dcfe0.js.map