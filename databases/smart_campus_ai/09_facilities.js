// Smart Campus AI - Facilities Collection

let facilitiesData = [];

for (let i = 1; i <= 60; i++) {
  facilitiesData.push({
    facilityId: "FACI" + String(i).padStart(3, "0"),

    facilityName: [
      "Computer Lab",
      "AI Lab",
      "Library",
      "Seminar Hall",
      "Auditorium",
      "Sports Complex",
      "Cafeteria",
      "Innovation Lab",
      "Research Lab",
      "Classroom"
    ][i % 10],

    facilityType: [
      "Academic",
      "Laboratory",
      "Recreation",
      "Administration",
      "Common Area"
    ][i % 5],

    building: [
      "Block A",
      "Block B",
      "Block C",
      "Block D",
      "Main Block"
    ][i % 5],

    floor: (i % 5) + 1,

    roomNumber: "R-" + (100 + i),

    capacity: 30 + (i % 6) * 10,

    department: [
      "CSE",
      "AI & ML",
      "ECE",
      "EEE",
      "Mechanical"
    ][i % 5],

    equipment: [
      "Computers",
      "Projector",
      "Smart Board",
      "Networking Equipment",
      "Laboratory Equipment"
    ],

    operatingHours: "09:00 AM - 06:00 PM",

    utilizationPercentage:
      40 + ((i * 4) % 61),

    maintenanceFrequency: [
      "Monthly",
      "Quarterly",
      "Half-Yearly"
    ][i % 3],

    lastMaintenance:
      new Date(2026, i % 9, 1 + (i % 25)),

    nextMaintenance:
      new Date(2026, (i + 2) % 12, 1 + (i % 25)),

    conditionScore: Number(
      (6 + ((i * 0.13) % 4)).toFixed(2)
    ),

    facilityStatus:
      i % 15 === 0
        ? "Under Maintenance"
        : "Available",

    managerId:
      "FAC" +
      String(((i - 1) % 60) + 1).padStart(3, "0")
  });
}

db.facilities.insertMany(facilitiesData);

print(
  "Facilities inserted:",
  db.facilities.countDocuments()
);