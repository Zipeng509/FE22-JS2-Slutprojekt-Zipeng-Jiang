var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire0b32;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire0b32=i);var o=i("fASYj");const r=document.getElementById("img-url-input"),l=document.getElementById("title-input"),a=document.getElementById("text-input"),d=document.getElementById("create-post-btn"),u=document.getElementById("sign-out-btn"),s=document.getElementById("username-element");if(!s)throw new Error("No element was found with id of username-element");if(!r)throw new Error("No image element was found with id of image-url-input");if(!l)throw new Error("No title element was found with id of title-input");if(!a)throw new Error("No text element was found with id of text-input");if(!d)throw new Error("No button element was found with id of create-post-btn");if(!u)throw new Error("No sign out button element was found with id 'sign-out-btn' ");s.innerText=localStorage.getItem("signedInUser")??"",u.addEventListener("click",(()=>{localStorage.removeItem("signedInUser"),location.assign("./index.html")})),d.addEventListener("click",(async()=>{if(""===r.value)return void alert("Please fill in image url");if(""===l.value)return void alert("Please fill in title");if(""===a.value)return void alert("Please fill in text");const e=localStorage.getItem("signedInUser")??"";await(0,o.createPost)(e,{title:l.value,image:r.value,description:a.value,createdAt:new Date}),r.value="",l.value="",a.value=""}));
//# sourceMappingURL=createpost.1a74609e.js.map