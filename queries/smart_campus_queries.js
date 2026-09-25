/*
Advanced MongoDB Queries
Database: smart_campus_ai
*/

/* 1. Students with CGPA above 8.5 */
db.students.find(
  { cgpa: { $gt: 8.5 } },
  { _id: 0, studentId: 1, name: 1, department: 1, cgpa: 1 }
);

/* 2. Students with attendance below 75% */
db.students.find(
  { attendancePercentage: { $lt: 75 } },
  { _id: 0, studentId: 1, name: 1, attendancePercentage: 1 }
);

/* 3. Average CGPA by department */
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      averageCGPA: { $avg: "$cgpa" },
      studentCount: { $sum: 1 }
    }
  },
  { $sort: { averageCGPA: -1 } }
]);

/* 4. Top 10 students by CGPA */
db.students.find(
  {},
  { _id: 0, studentId: 1, name: 1, department: 1, cgpa: 1 }
).sort({ cgpa: -1 }).limit(10);

/* 5. Average assessment percentage by department */
db.assessments.aggregate([
  {
    $group: {
      _id: "$department",
      averagePercentage: { $avg: "$percentage" },
      assessmentCount: { $sum: 1 }
    }
  },
  { $sort: { averagePercentage: -1 } }
]);

/* 6. Campus events with high participation */
db.campus_events.find(
  { attendedParticipants: { $gt: 100 } },
  {
    _id: 0,
    eventName: 1,
    eventType: 1,
    venue: 1,
    registeredParticipants: 1,
    attendedParticipants: 1
  }
).sort({ attendedParticipants: -1 });

/* 7. Facilities with high utilization */
db.facilities.find(
  { utilizationPercentage: { $gt: 80 } },
  {
    _id: 0,
    facilityName: 1,
    facilityType: 1,
    building: 1,
    utilizationPercentage: 1,
    conditionScore: 1
  }
).sort({ utilizationPercentage: -1 });

/* 8. Unresolved complaints */
db.complaints.find(
  { status: { $ne: "Resolved" } },
  {
    _id: 0,
    complaintId: 1,
    category: 1,
    priority: 1,
    subject: 1,
    status: 1,
    responseTimeHours: 1
  }
).sort({ priority: 1 });

/* 9. Average complaint resolution time by category */
db.complaints.aggregate([
  {
    $group: {
      _id: "$category",
      averageResolutionTime: { $avg: "$resolutionTimeHours" },
      complaintCount: { $sum: 1 }
    }
  },
  { $sort: { averageResolutionTime: -1 } }
]);

/* 10. Student performance risk analysis using $lookup */
db.students.aggregate([
  {
    $lookup: {
      from: "performance",
      localField: "studentId",
      foreignField: "studentId",
      as: "performanceData"
    }
  },
  { $unwind: "$performanceData" },
  {
    $match: {
      attendancePercentage: { $lt: 75 },
      "performanceData.cgpa": { $lt: 7 }
    }
  },
  {
    $project: {
      _id: 0,
      studentId: 1,
      name: 1,
      department: 1,
      attendancePercentage: 1,
      cgpa: "$performanceData.cgpa",
      riskLevel: "$performanceData.riskLevel"
    }
  }
]);

/* 11. Department-wise student statistics */
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      totalStudents: { $sum: 1 },
      averageCGPA: { $avg: "$cgpa" },
      averageAttendance: { $avg: "$attendancePercentage" }
    }
  },
  { $sort: { averageCGPA: -1 } }
]);

/* 12. Students having MongoDB as a skill */
db.students.find(
  { skills: "MongoDB" },
  { _id: 0, studentId: 1, name: 1, department: 1, skills: 1 }
);

/* 13. Top-performing students in each department */
db.students.aggregate([
  { $sort: { department: 1, cgpa: -1 } },
  {
    $group: {
      _id: "$department",
      topStudent: { $first: "$$ROOT" }
    }
  },
  {
    $project: {
      _id: 0,
      department: "$_id",
      studentId: "$topStudent.studentId",
      name: "$topStudent.name",
      cgpa: "$topStudent.cgpa"
    }
  }
]);

/* 14. Attendance status distribution */
db.attendance.aggregate([
  {
    $group: {
      _id: "$status",
      count: { $sum: 1 },
      averageAttendance: { $avg: "$attendancePercentage" }
    }
  },
  { $sort: { count: -1 } }
]);

/* 15. Create indexes for faster student queries */
db.students.createIndex({ studentId: 1 });
db.students.createIndex({ department: 1, cgpa: -1 });

/* Check indexes */
db.students.getIndexes();
