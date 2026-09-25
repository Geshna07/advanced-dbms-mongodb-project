// Smart Campus AI - Courses Collection

let coursesData = [];

for (let i = 1; i <= 60; i++) {
  coursesData.push({
    courseId: "CRS" + String(i).padStart(3, "0"),

    courseCode: "CS" + String(100 + i),

    courseName: [
      "Data Structures",
      "Database Management Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Networks",
      "Operating Systems",
      "Web Development",
      "Cloud Computing",
      "Cyber Security",
      "Software Engineering"
    ][i % 10],

    department: [
      "CSE",
      "AI & ML",
      "ECE",
      "EEE",
      "Mechanical"
    ][i % 5],

    semester: (i % 8) + 1,

    credits: 3 + (i % 2),

    courseType: i % 3 === 0 ? "Elective" : "Core",

    facultyId: "FAC" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    durationWeeks: 14,

    maxStudents: 40 + (i % 3) * 10,

    enrolledStudents: 25 + (i % 20),

    roomNumber: "CR-" + (100 + (i % 30)),

    skillsCovered: [
      "Programming",
      "Problem Solving",
      "Database",
      "AI",
      "Data Analysis"
    ],

    assessmentMethods: [
      "Assignments",
      "Mid Exam",
      "End Exam",
      "Projects"
    ],

    status: i % 15 === 0 ? "Inactive" : "Active"
  });
}

db.courses.insertMany(coursesData);

print("Courses inserted:", db.courses.countDocuments());