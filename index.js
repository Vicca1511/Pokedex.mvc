const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 12,
    nome: "Butterfree",
    tipo: "Bug",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
  },
  {
    id: 4,
    nome: "Charmander",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 25,
    nome: "Pikachu",
    tipo: "Eletric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
    id: 7,
    nome: "Squirtle",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
];
app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  res.redirect("/home");
});

app.get("/", (req, res) => {
  
});

app.get("/home", (req, res) => {
  res.render("index", { pokedex });
});
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")






);
