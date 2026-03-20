let ageEnfant = 10;
let agePere = ageEnfant * 2; // 20
let ageMere = agePere - 5; // 15
let ageGrandPere = ageMere * 2 + ageEnfant / 2; // 30 + 5 = 35
let ageOncle = agePere + 10; // 30

module.exports = {
  ageEnfant,
  agePere,
  ageMere,
  ageGrandPere,
  ageOncle,
};
