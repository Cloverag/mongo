// const http = require ("http");
// const fs = require ("fs");
//  const myServer = http.createServer((req, res) => {

//  //console.log(req.headers);
//  const log = `${Date.now()}: ${req.url} New Req Recived\n`
//  fs.appendFile("log.txt", log , (err , data) => { 
 

// });
//  res.end("hello from server 1");
// });

// myServer.listen(8000, () => {
//   console.log("server is running on port 3000");
// });







const http = require ("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();
 app.get("/", (req, res) => {
   return res.send("hello from page 1");
 })
 app.get("/about", (req, res) => {
  return res.send("hello from  about page");
})

function myhandler(req, res) {


}
 
const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("server sytarted"));