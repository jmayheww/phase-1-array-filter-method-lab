// Code your solution here

const drivers = [];


drivers.length = 0;

drivers.push("Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby");


function findMatching(collection, string) {
  return collection.filter(
    (name) => name.toLowerCase() === string.toLowerCase()
  );
}

findMatching(drivers, "Bobby");
findMatching(drivers, "Sammy");



function fuzzyMatch(collection, string) {
  console.log(collection.filter(name => name.startsWith(string)));
  return collection.filter(
    (name) => name.startsWith(string));
}

fuzzyMatch(drivers, "Sa");

drivers.length = 0;

drivers.push(
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
);


function matchName (collection, string) {



  console.log(collection.filter(item => item.name === string));
  return collection.filter(item => item.name === string);

}

matchName(drivers, 'Bobby');





// // const bobbyDriver = function (name) {
// //     return name === "Bobby";
// // };

// // const sammyDriver = function (name) {
// //     return name === "Sammy";
// // }

// //     findMatching(drivers, bobbyDriver);

// //    findMatching(drivers, sammyDriver);

// const bobbyDrivers = function(name) {
//     return name === bobby;
// }
