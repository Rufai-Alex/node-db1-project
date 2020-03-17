const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: " err from get all" });
  }
});

module.exports = server;
