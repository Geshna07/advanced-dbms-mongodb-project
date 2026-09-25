// Smart Campus AI - Faculty Collection

let facultyData = [];

for (let i = 1; i <= 60; i++) {
  facultyData.push({
    facultyId: "FAC" + String(i).padStart(3, "0"),

    name: "Faculty " + i,

    age: 30 + (i % 25),

    gender: i % 2 === 0 ? "Female" : "Male",

    department: [
      "CSE",
      "AI & ML",
      "ECE",
      "EEE",
      "Mechanical"
    ][i % 5],

    designation: [
      "Assistant Professor",
      "Associate Professor",
      "Professor"
    ][i % 3],

    specialization: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Cyber Security",
      "Cloud Computing"
    ][i % 5],

    email: "faculty" + i + "@smartcampus.edu",

    phone: "910000" + String(i).padStart(4, "0"),

    experienceYears: 3 + (i % 20),

    qualification: [
      "M.Tech",
      "Ph.D",
      "M.E",
      "M.Sc"
    ][i % 4],

    joiningYear: 2010 + (i % 15),

    coursesHandled: [
      "DBMS",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Structures",
      "Computer Networks"
    ],

    officeRoom: "R-" + (100 + i),

    researchAreas: [
      "AI",
      "IoT",
      "Big Data",
      "Blockchain"
    ],

    status: i % 12 === 0 ? "Inactive" : "Active"
  });
}

db.faculty.insertMany(facultyData);

print("Faculty inserted:", db.faculty.countDocuments());