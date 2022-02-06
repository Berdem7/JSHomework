/*
1-r bodlogo
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
Array n urt hed ve?
Array n urtiig console.log -r hevleh myAlphabetLength function bich
Function dotor Array n urt 4-s baga esehiig shalgah if nuhtsul bich
*/

// let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

// function myAlphabetLength(x) {
//   let answer;
//   if (x.length < 4) {
//     answer = "Array length is shorter than 4";
//   } else {
//     answer = "Array length is NOT shorter than 4";
//   }
//   console.log("Length of the array equals to " + x.length);
//   console.log(answer);
// }

// console.log(myAlphabetLength(myAlphabet));

/*
2-r bodlogo
Planets nertei Array-g 5 string utgatai zarlaj, taniulna uu.
Array dah element tus burig index n hamt hevlen gargaj irne uu.
*/

// let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

// planets.forEach(function (item, index) {
//   console.log(index, item);
// });

// for (i = 0; i < planets.length; i++) {
//   console.log(i + " - " + planets[i]);
// }

/*
3-r bodlogo
wowDatatypes array zarlaj, taniulna uu.
array dah element ni 5 uur ugugdliin turultei baih yostoi (str, int, float, char, boolean)
Array deer davtalt hiij, array dahi element buriig index bolon ugugdliin turliin hamt hevlen gargajr irn uu

typeof command ashiglana
*/

// let wowDatatypes = ["this is string", 5, 3.14, "A", true];

// for (let i = 0; i < wowDatatypes.length; i++) {
//   console.log(i + " " + typeof wowDatatypes[i]);
// }

/*
5-r bodlogo
let student1Courses = ['Math','English','Programming'];
let student2Courses = ['Geography','Spanish','Programming'];
2 array deer davtalt hiij, herev niitleg element baigaa bol tedgeeriig gargaj irne uu.
*/

let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

for (i = 0; i < student1Courses.length; i++) {
  if (student2Courses.indexOf(student1Courses[i]) > -1) {
    console.log(student1Courses[i]);
  }
}
