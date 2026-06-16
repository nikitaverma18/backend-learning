const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

const users = {
  1: "Mary",
  2: "John",
  3: "Jacob",
  4: "Ravi",
  5: "Rahul",
};

console.log("Hello World");

app.get("/hello/:id", (req, res) => {
  const { id } = req.params;

  console.log(`GET request received with id: ${id}`);

  res.json({
    message: `Hello from the GET request ${id}`,
  });

  console.log(`Sending response back for id: ${id}`);
});

app.get("/getUser/:id", (req, res) => {
  const { id } = req.params;

  const user = users[id];

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json({
    name: user,
  });
});

app.post("/sum", (req, res) => {
  const { x, y } = req.body;

  console.log(`Received request with x=${x} and y=${y}`);

  const sum = Number(x) + Number(y);

  console.log(`Sending sum=${sum} as response`);

  res.json({
    sum,
  });
});

app.get("/time", (req, res) => {
  const now = new Date();

  res.json({
    time: now.toISOString(),
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});