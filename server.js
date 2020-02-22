const express = require('express');
const app = express();
const port = 3000;

app.listen(port, confirmation);

function confirmation(){
  console.log(`Listening port: ${port}`);
}

app.get('/summary/:day', onRequest);

function onRequest(request, response){
  const day = request.params.day
  const daySummary = summary[day]
  response.send(daySummary);
}

app.get('/:day', onRequest2);

function onRequest2(request, response){
  const day = request.params.day
  const daySummary = render(summary[day], day)
  response.send(daySummary);
}

const summary = {
  monday : {
    subject: "terminal basics",
    tools: [
      "node",
      "zsh",
      "nvm"
    ]
  },
  tuesday : {
    subject: "javascript",
    tools: "vscode"
  },
  wednesday : {
    subject: "git",
    tools: [
      "gitHub",
      "terminal"
    ]
  },
  thursday : {
    subject: "express",
    tools: [
      "npm",
      "terminal"
    ]
  },
  friday : {
    subject: "axios",
    tools: [
      "npm",
      "terminal"
    ]
  }
}

function render(data, day){
  const documents = `<html>
  <head>
  <title>First Week Summary</title>

  </head>
  <body>
  <h1>${day} we learned ${data.subject}.</h1>
  </body>
  </html>`
  return documents;
}