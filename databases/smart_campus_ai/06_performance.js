// Smart Campus AI - Performance Collection

let perfData = [];

for (let i = 1; i <= 60; i++) {

  let cgpa = Number(
    (6.5 + ((i * 0.17) % 3.4)).toFixed(2)
  );

  let attendancePercentage = 65 + ((i * 3) % 36);

  let assessmentAverage = Number(
    (55 + ((i * 5) % 46)).toFixed(2)
  );

  let performanceLevel;

  if (cgpa >= 8.5 && assessmentAverage >= 80) {
    performanceLevel = "Excellent";
  } else if (cgpa >= 7.5 && assessmentAverage >= 70) {
    performanceLevel = "Good";
  } else if (cgpa >= 6.5 && assessmentAverage >= 60) {
    performanceLevel = "Average";
  } else {
    performanceLevel = "Needs Improvement";
  }

  let riskLevel;

  if (attendancePercentage < 70 || cgpa < 7) {
    riskLevel = "High";
  } else if (attendancePercentage < 80 || cgpa < 8) {
    riskLevel = "Medium";
  } else {
    riskLevel = "Low";
  }

  perfData.push({
    performanceId:
      "PERF" + String(i).padStart(3, "0"),

    studentId:
      "STU" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    department: [
      "CSE",
      "AI & ML",
      "ECE",
      "EEE",
      "Mechanical"
    ][i % 5],

    semester: (i % 8) + 1,

    cgpa: cgpa,

    attendancePercentage:
      attendancePercentage,

    assessmentAverage:
      assessmentAverage,

    performanceLevel:
      performanceLevel,

    riskLevel:
      riskLevel,

    strengths: [
      "Programming",
      "Problem Solving",
      "Communication",
      "Data Analysis",
      "Teamwork"
    ][i % 5],

    weaknesses: [
      "Time Management",
      "Mathematics",
      "Attendance",
      "Technical Writing",
      "Presentation"
    ][i % 5],

    projectsCompleted:
      i % 6,

    assignmentsCompleted:
      5 + (i % 10),

    certifications:
      i % 4,

    participationScore:
      50 + ((i * 4) % 51),

    mentorAssigned:
      "FAC" + String(((i - 1) % 60) + 1).padStart(3, "0")
  });
}

db.performance.insertMany(perfData);

print(
  "Performance inserted:",
  db.performance.countDocuments()
);