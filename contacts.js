// npm install react-native-uuid --save
// npm install buffer --save
import uuid from "react-native-uuid";
// import React, { useContext } from "react";
// import { NameContext } from "./App";

// const AddToList = () => {
//   const { fname, lname, phone } = useContext(NameContext);

// };

const NUM_CONTACTS = 30;

const firstNames = [
  "Emma",
  "Noah",
  "Olivia",
  "Liam",
  "Ava",
  "William",
  "Sophia",
  "Mason",
  "Isabella",
  "James",
  "Mia",
  "Benjamin",
  "Charlotte",
  "Jacob",
  "Abigail",
  "Michael",
  "Emily",
  "Elijah",
  "Harper",
  "Ethan",
  "Amelia",
  "Alexander",
  "Evelyn",
  "Oliver",
  "Elizabeth",
  "Daniel",
  "Sofia",
  "Lucas",
  "Madison",
  "Matthew",
  "Avery",
  "Aiden",
  "Ella",
  "Jackson",
  "Scarlett",
  "Logan",
  "Grace",
  "David",
  "Chloe",
  "Joseph",
  "Victoria",
  "Samuel",
  "Riley",
  "Henry",
  "Aria",
  "Owen",
  "Lily",
  "Sebastian",
  "Aubrey",
  "Gabriel",
  "Zoey",
  "Carter",
  "Penelope",
  "Jayden",
  "Lillian",
  "John",
  "Addison",
  "Luke",
  "Layla",
  "Anthony",
  "Natalie",
  "Isaac",
  "Camila",
  "Dylan",
  "Hannah",
  "Wyatt",
  "Brooklyn",
  "Andrew",
  "Zoe",
  "Joshua",
  "Nora",
  "Christopher",
  "Leah",
  "Grayson",
  "Savannah",
  "Jack",
  "Audrey",
  "Julian",
  "Claire",
  "Ryan",
  "Eleanor",
  "Jaxon",
  "Skylar",
  "Levi",
  "Ellie",
  "Nathan",
  "Samantha",
  "Caleb",
  "Stella",
  "Hunter",
  "Paisley",
  "Christian",
  "Violet",
  "Isaiah",
  "Mila",
  "Thomas",
  "Allison",
  "Aaron",
  "Alexa",
  "Lincoln",
];

const lastNames = [
  "Smith",
  "Jones",
  "Brown",
  "Johnson",
  "Williams",
  "Miller",
  "Taylor",
  "Wilson",
  "Davis",
  "White",
  "Clark",
  "Hall",
  "Thomas",
  "Thompson",
  "Moore",
  "Hill",
  "Walker",
  "Anderson",
  "Wright",
  "Martin",
  "Wood",
  "Allen",
  "Robinson",
  "Lewis",
  "Scott",
  "Young",
  "Jackson",
  "Adams",
  "Tryniski",
  "Green",
  "Evans",
  "King",
  "Baker",
  "John",
  "Harris",
  "Roberts",
  "Campbell",
  "James",
  "Stewart",
  "Lee",
  "County",
  "Turner",
  "Parker",
  "Cook",
  "Mc",
  "Edwards",
  "Morris",
  "Mitchell",
  "Bell",
  "Ward",
  "Watson",
  "Morgan",
  "Davies",
  "Cooper",
  "Phillips",
  "Rogers",
  "Gray",
  "Hughes",
  "Harrison",
  "Carter",
  "Murphy",
];

// generate a random number between min and max
const rand = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// generate a name
const generateName = () =>
  `${firstNames[rand(firstNames.length - 1)]} ${
    lastNames[rand(lastNames.length - 1)]
  }`;

// generate a phone number
const generatePhoneNumber = () =>
  `${rand(999, 100)}-${rand(999, 100)}-${rand(9999, 1000)}`;

// create a person
const createContact = () => ({
  name: generateName(),
  phone: generatePhoneNumber(),
});

// compare two contacts for alphabetizing
export const compareNames = function (c1, c2) {
  var contact1 = c1.name.toUpperCase();
  var contact2 = c2.name.toUpperCase();
  if (contact1 < contact2) {
    return -1;
  }
  if (contact1 > contact2) {
    return 1;
  }
  // names must be equal
  return 0;
};

// add keys to based on index
const addIds = (contact) => ({ id: uuid.v1(), ...contact });

// export uuid generator
export const generateUUID = uuid.v1;

// create an array of length NUM_CONTACTS and add keys
export default Array.from({ length: NUM_CONTACTS }, createContact).map(addIds);
