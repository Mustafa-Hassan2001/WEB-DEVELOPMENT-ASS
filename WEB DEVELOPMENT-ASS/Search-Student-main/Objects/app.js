// var student1 = {
//   name: "Hamza",
//   rollNo: 1,
//   age: 21,
//   result: "A+",
// };
// var student2 = {
//   name: "Atif",
//   rollNo: 2,
//   age: 21,
//   result: "A+",
// };
// var student3 = {
//   name: "Huzaifa",
//   rollNo: 3,
//   age: 21,
//   result: "A+",
// };
// var student4 = {
//   name: "Bukhari",
//   rollNo: 4,
//   age: 21,
//   result: "A+",
// };
// var student5 = {
//   name: "Ali",
//   rollNo: 5,
//   age: 21,
//   result: "A+",
// };
// var students = [student1, student2, student3, student4, student5];

// console.log(students);

// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

var student1 = {
  rollno: 1,
  name: "Hamza",
  fathername: "Abid",
  Result: "Pass",
};
var student2 = {
  rollno: 2,
  name: "Atif",
  fathername: "Ali",
  Result: "Pass",
};
var student3 = {
  rollno: 3,
  name: "Huzaifa",
  fathername: "ABC",
  Result: "Fail",
};
var student4 = {
  rollno: 4,
  name: "Ali",
  fathername: "XYZ",
  Result: "Fail",
};
var student5 = {
  rollno: 5,
  name: "Ahmed",
  fathername: "Shah",
  Result: "Pass",
};
var students = [student1, student2, student3, student4, student5];
var studentData = document.getElementById("studentdata");
for (var i = 0; i < students.length; i++) {
  var obj = students[i];
  studentData.innerHTML +=
    "<tr><td>" +
    obj.rollno +
    "</td><td>" +
    obj.name +
    "</td><td>" +
    obj.fathername +
    "</td><td>" +
    obj.Result +
    "</td></tr>";
}
function searchStudent() {
  var inpVal = document.getElementById("inpVal");
  for (var i = 0; i < students.length; i++) {
    var obj = students[i];
    if (inpVal.value == obj.rollno) {
      console.log(obj);
      studentSearch.innerHTML =
        "<tr><td>" +
        obj.rollno +
        "</td><td>" +
        obj.name +
        "</td><td>" +
        obj.fathername +
        "</td><td>" +
        obj.Result +
        "</td></tr>";
    }
  }
}

// function searchResult() {
//   var userRollNumber = rollnumberInput.value;
//   for (var i = 0; i < student.length; i++) {
//     if (userRollNumber == student[i].rollno) {
//       var obj = student[i];
//       console.log(student[i]);
//       showRollNumber.innerHTML = obj.rollno;
//       showName.innerHTML = obj.name;
//       showFatherName.innerHTML = obj.fathername;
//       showResult.innerHTML = obj.Result;
//     }
//   }
// }

// var student = {
//   name: "Hamza Bukhari",
// };

// // --------------------
// for (var i = 0; i < student.length; i++) {
//   student[i].id = i + 1;
//   console.log(student[i]);
// }
// --------------------------------

// var student = {
//   name: "Hamza",
//   fathername: "Mubeen",
//   age: 18,
//   hobbies: ["a", "b", "c"],
//   isClearedInAllSubjects: false,
//   address: {
//     Country: "Pakistan",
//     city: "Karachi",
//     Area: "Hussainabad",
//   },
//   func: function () {
//     console.log("Function Called");
//   },
// };
// student.func();
// console.log(student);
