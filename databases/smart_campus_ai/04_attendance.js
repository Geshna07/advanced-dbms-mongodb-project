// Smart Campus AI - Attendance Collection

let attendanceData = [];

for (let i = 1; i <= 60; i++) {
  let totalClasses = 20 + (i % 11);
  let classesAttended = 12 + (i % 15);

  if (classesAttended > totalClasses) {
    classesAttended = totalClasses;
  }

  let classesAbsent = totalClasses - classesAttended;
  let attendancePercentage = Number(
    ((classesAttended / totalClasses) * 100).toFixed(2)
  );

  attendanceData.push({
    attendanceId: "ATT" + String(i).padStart(3, "0"),

    studentId:
      "STU" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    courseId:
      "CRS" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August"
    ][i % 8],

    totalClasses: totalClasses,

    classesAttended: classesAttended,

    classesAbsent: classesAbsent,

    lateCount: i % 5,

    attendancePercentage: attendancePercentage,

    status:
      attendancePercentage >= 75
        ? "Good"
        : "Low",

    facultyId:
      "FAC" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    semester: (i % 8) + 1,

    department: [
      "CSE",
      "AI & ML",
      "ECE",
      "EEE",
      "Mechanical"
    ][i % 5],

    attendanceMode:
      i % 2 === 0 ? "Biometric" : "Manual",

    remarks:
      attendancePercentage >= 75
        ? "Regular attendance"
        : "Attendance improvement required"
  });
}

db.attendance.insertMany(attendanceData);

print("Attendance inserted:", db.attendance.countDocuments());