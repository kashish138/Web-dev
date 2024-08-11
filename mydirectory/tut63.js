// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World this is rohan das');
  res.end('<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Psuedo selectors and more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: greenyellow;
              padding: 34px;
              width: 666px;
              margin: 34px auto;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a.hover{
              color: black;
          }
          a:visited{
              background-color: yellow;
          }
          a:active{
              background-color: darkblue;
          }
          .btn{
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: rgb(209, 131, 146);
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              color: darkgoldenrod;
              background-color: white;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae nisi autem, voluptatibus quasi accusantium quaerat quas quidem odio reprehenderit, ipsam deleniti? Tempore eaque labore voluptatem maxime officiis similique repellendus distinctio quasi soluta recusandae!</p>
          <a href="https://facebook.com" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});