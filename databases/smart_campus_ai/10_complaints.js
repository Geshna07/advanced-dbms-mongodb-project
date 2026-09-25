// Smart Campus AI - Complaints Collection

let complaintsData = [];

for (let i = 1; i <= 60; i++) {
  complaintsData.push({
    complaintId: "CMP" + String(i).padStart(3, "0"),

    studentId:
      "STU" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    facilityId:
      "FACI" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    facultyId:
      "FAC" + String(((i - 1) % 60) + 1).padStart(3, "0"),

    category: [
      "Infrastructure",
      "Internet",
      "Transport",
      "Cleanliness",
      "Academic",
      "Security"
    ][i % 6],

    subject: [
      "WiFi not working",
      "Classroom equipment issue",
      "Transport delay",
      "Cleanliness issue",
      "Projector problem",
      "Security concern"
    ][i % 6],

    description:
      "Complaint regarding campus service or facility",

    priority: [
      "Low",
      "Medium",
      "High",
      "Critical"
    ][i % 4],

    status: [
      "Open",
      "In Progress",
      "Resolved",
      "Closed"
    ][i % 4],

    submittedDate:
      new Date(2026, i % 9, 1 + (i % 27)),

    assignedTo:
      "FAC" + String(((i + 5) % 60) + 1).padStart(3, "0"),

    department: [
      "CSE",
      "AI & ML",
      "ECE",
      "EEE",
      "Mechanical"
    ][i % 5],

    location: [
      "Block A",
      "Block B",
      "Library",
      "Cafeteria",
      "Main Auditorium"
    ][i % 5],

    responseTimeHours:
      2 + (i % 24),

    resolutionTimeHours:
      8 + (i % 72),

    satisfactionScore:
      2 + (i % 4),

    reopened:
      i % 10 === 0
  });
}

db.complaints.insertMany(complaintsData);

print(
  "Complaints inserted:",
  db.complaints.countDocuments()
);