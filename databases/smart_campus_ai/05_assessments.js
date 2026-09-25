// Smart Campus AI - Assessments Collection

let assessmentsData = [];

for (let i = 1; i <= 60; i++) {
  let maxMarks = 100;
  let marksObtained = 45 + ((i * 7) % 56);

  let percentage = Number(
    ((marksObtained / maxMarks) * 100).toFixed(2)
  );

  assessmentsData.push({
    assessmentId: "ASM" + String(i).padStart(3, "0"),

    studentId:
      "STU" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    courseId:
      "CRS" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    facultyId:
      "FAC" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    assessmentType: [
      "Quiz",
      "Assignment",
      "Mid-Term",
      "Project",
      "End-Term"
    ][i % 5],

    title: "Assessment " + i,

    maxMarks: maxMarks,

    marksObtained: marksObtained,

    percentage: percentage,

    difficulty: [
      "Easy",
      "Medium",
      "Hard"
    ][i % 3],

    submissionStatus:
      i % 10 === 0 ? "Late" : "Submitted",

    submissionDate:
      new Date(2026, i % 9, 1 + (i % 27)),

    semester: (i % 8) + 1,

    department: [
      "CSE",
      "AI & ML",
      "ECE",
      "EEE",
      "Mechanical"
    ][i % 5],

    feedback:
      percentage >= 75
        ? "Good performance"
        : "Needs improvement",

    attempts: 1 + (i % 3)
  });
}

db.assessments.insertMany(assessmentsData);

print("Assessments inserted:", db.assessments.countDocuments());