const superHeroes = require("superheroes")
// console.log(superHeroes.all);

var ourRandom = ()=>{
    var n = Math.floor(Math.random() * superHeroes.all.length)

    return superHeroes.all[n]
}


console.log(ourRandom());

// console.log(superHeroes.random())