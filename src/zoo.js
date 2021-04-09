/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function animalsByIds(...ids) {
  const { animals } = data;
  const filtered = animals.filter(({ id }) => ids.find((idArray) => idArray === id));

  return filtered;
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  const { residents } = animals.find(({ name }) => name === animal);
  const isEveryOlder = residents.every(({ age: animalAge }) => animalAge > age);

  return isEveryOlder;
}

function employeeByName(employeeName) {
  const { employees } = data;
  const employeeObject = employees.find(({ firstName, lastName }) => {
    if (firstName === employeeName || lastName === employeeName) return true;
    return false;
  });

  return employeeObject || {};
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };

  return newEmployee;
}

function isManager(id) {
  const { employees } = data;
  const findManager = employees.some(({ managers }) => managers.find((manager) => manager === id));

  return findManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };

  employees.push(newEmployee);
}

function animalCount(species) {
  const { animals } = data;

  if (species) {
    const speciesArray = animals.find(({ name }) => name === species);
    const speciesCount = speciesArray.residents.length;

    return speciesCount;
  }

  const countObject = animals.reduce((animalsObject, { name, residents }) => {
    const animalsCount = animalsObject;
    animalsCount[name] = residents.length;

    return animalsCount;
  }, {});

  return countObject;
}

function entryCalculator(entrants = {}) {
  const { prices } = data;

  if (!Object.keys(entrants).length) return 0;

  const totalPrice = Object.keys(entrants).reduce((total, personType) => {
    const price = prices[personType];
    const people = entrants[personType];
    const toPay = total + (price * people);

    return toPay;
  }, 0);

  return totalPrice;
}
// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
