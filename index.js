const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require("path");
const { runInNewContext } = require("vm");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: "Butterfree",
    tipo: "Bug",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 3,
    nome: "Pikachu",
    tipo: "Eletric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
    id: 4,
    nome: "Squirtle",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
];

let pokemon = undefined;

app.get("/home", (req, res) => {
  res.render("index", { pokedex , pokemon});
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/home");
});

app.get("/detalhes/:id" , (req, res) =>{
  
  const id = +req.params.id ;
  pokemon = pokedex.find( pokemon => pokemon.id === id);
  res.redirect("/home");
  

})
app.post("/update/:id" , (req, res) => {
    const id = +req.params.id - 1;
    const newPokemon = req.body;
    newPokemon.id = id + 1;
    pokedex[id] = newPokemon;
    pokemon = undefined;
   
    res.redirect("/home")
    
})
app.listen(3000, () =>{

  console.log("Servidor rodando em http://localhost:3000/home")
  
});