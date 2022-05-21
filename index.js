const express = require("express");
const app = express();
const path = require ("path")

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

const pokedex = [

    {
    id: 12,
    nome:"Butterfree",
    tipo:"Bug",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png"

},
{
    id: 4,
    nome:"Charmander",
    tipo:"Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"

},
{
    id: 25 ,
    nome:"Pikachu",
    tipo:"Eletric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"

}]

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.render("index", {pokedex});
});
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
