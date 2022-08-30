import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("This is /");
};

const handleAbout = (req, res) => {
  return res.send("This is /about");
};
const handleContact = (req, res) => {
  return res.send("This is /contact");
};
const handleLogin = (req, res) => {
  return res.send("This is /login");
};

const handleListing = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.get("/", handleHome);

app.get("/about", handleAbout);

app.get("/contact", handleContact);

app.get("/login", handleLogin);

app.listen(PORT, handleListing);
