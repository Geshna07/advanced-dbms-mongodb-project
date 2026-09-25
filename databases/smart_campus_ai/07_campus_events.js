// Smart Campus AI - Campus Events Collection

let eventsData = [];

for (let i = 1; i <= 60; i++) {
  eventsData.push({
    eventId: "EVT" + String(i).padStart(3, "0"),

    eventName: [
      "AI Workshop",
      "Hackathon",
      "Tech Fest",
      "Sports Meet",
      "Coding Contest",
      "Cultural Fest",
      "Robotics Challenge",
      "Career Fair",
      "Innovation Expo",
      "Guest Lecture"
    ][i % 10],

    eventType: [
      "Technical",
      "Sports",
      "Cultural",
      "Career",
      "Academic"
    ][i % 5],

    organizer: [
      "CSE Department",
      "Student Council",
      "AI Club",
      "Sports Committee",
      "Innovation Cell"
    ][i % 5],

    venue: [
      "Main Auditorium",
      "Seminar Hall",
      "Innovation Lab",
      "Sports Ground",
      "Conference Hall"
    ][i % 5],

    eventDate: new Date(
      2026,
      i % 12,
      1 + (i % 27)
    ),

    durationHours: 2 + (i % 5),

    registeredParticipants:
      50 + ((i * 13) % 151),

    attendedParticipants:
      40 + ((i * 11) % 131),

    registrationFee:
      i % 4 === 0 ? 0 : 100 + (i % 5) * 100,

    budget:
      10000 + (i * 1500),

    facultyCoordinator:
      "FAC" +
      String(((i - 1) % 60) + 1).padStart(3, "0"),

    departmentsParticipating: [
      "CSE",
      "AI & ML",
      "ECE",
      "EEE",
      "Mechanical"
    ],

    sponsors: [
      "TechCorp",
      "Microsoft",
      "Google",
      "Amazon",
      "Local Partners"
    ][i % 5],

    feedbackScore: Number(
      (3 + ((i * 0.13) % 2)).toFixed(2)
    ),

    status:
      i % 10 === 0
        ? "Completed"
        : "Upcoming"
  });
}

db.campus_events.insertMany(eventsData);

print(
  "Campus events inserted:",
  db.campus_events.countDocuments()
);