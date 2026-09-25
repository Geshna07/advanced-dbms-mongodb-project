// Smart Campus AI - Students Collection

let studentsData = [];

for (let i = 1; i <= 60; i++) {
  studentsData.push({
    studentId: "STU" + String(i).padStart(3, "0"),
    name: "Student " + i,
    age: 18 + (i % 4),
    gender: i % 2 === 0 ? "Female" : "Male",

    department: [
      "CSE",
      "AI & ML",
      "ECE",
      "EEE",
      "Mechanical"
    ][i % 5],

    year: (i % 4) + 1,

    email: "student" + i + "@smartcampus.edu",

    phone: "900000" + String(i).padStart(4, "0"),

    city: [
      "Hyderabad",
      "Bengaluru",
      "Chennai",
      "Mumbai",
      "Delhi"
    ][i % 5],

    cgpa: Number((6.5 + ((i * 0.17) % 3.4)).toFixed(2)),

    attendancePercentage:
      65 + ((i * 3) % 36),

    skills: [
      ["Python", "SQL"],
      ["Java", "React"],
      ["C++", "DSA"],
      ["MongoDB", "JavaScript"],
      ["HTML", "CSS"]
    ][i % 5],

    scholarship: i % 4 === 0 ? "Merit Scholarship" : "None",

    joinedYear: 2023 + (i % 3),

    status: i % 15 === 0 ? "Inactive" : "Active"
  });
}

db.students.insertMany(studentsData);

print("Students inserted:", db.students.countDocuments());