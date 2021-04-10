var webSocketServ = require("ws").Server;

var wss = new webSocketServ({
  port: 9090,
});
var webSocketServ = require("ws").Server;

wss.on("connection", function (conn) {
  console.log("user connected");
  conn.on("message", function (message) {});
  conn.on("close", function () {
    console.log("connection closed");
  });

  conn.send("hello world");
});

function sendtoOtherUser(connection, message) {
  connection.send(JSON.stringify(message));
}
