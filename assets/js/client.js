var connection = new WebSocket("ws://localhost:9090");

connection.onopen = function () {
  console.log("connected to the server");
};
connection.onmessage = function (msg) {
  var data = JSON.parse(msg.data);
};
connection.onerror = function (error) {
  console.log(error);
};
let conname;
let url_string = window.location.href;
let url = new URL(url_string);
let username = url.searchParams.get("username");

if (connection.readyState === 1) {
  if (username !== null) {
    conname = username;
    if (conname.length > 0) {
      send({ type: "login", name: conname });
    }
  }
}

function send(message) {
  if (connectedUser) {
    message.name = connectedUser;
  }
  connection.send(JSON.stringify(message));
}
var local_video = document.querySelector("#local_video");
navigator.getUserMedia(
  { video: true, audio: true },
  function (myStream) {
    stream = myStream;
    local_video.srcObject = stream;
  },
  function (error) {
    console.log(error);
  }
);
