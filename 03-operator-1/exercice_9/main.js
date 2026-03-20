const totalHeritage = 120000000;

// Première catégorie 75%
let paul = (totalHeritage * 0.75) / 3;
let marie = (totalHeritage * 0.75) / 3;
let eric = ((totalHeritage * 0.75) / 3) / 2;
let clair = ((totalHeritage * 0.75) / 3) / 2;

// Deuxième catégorie 25%
let madameMukuna = (totalHeritage * 0.25) / 3;
let joseph = (totalHeritage * 0.25) / 3;
let sarah = (totalHeritage * 0.25) / 3;

module.exports = {
  totalHeritage,
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};
