// Smart Campus AI - Transport Collection

let transportData = [];

for (let i = 1; i <= 60; i++) {
  transportData.push({
    transportId: "TRN" + String(i).padStart(3, "0"),

    vehicleNumber: "TS09AB" + String(1000 + i),

    routeName: [
      "Uppal - Campus",
      "Madhapur - Campus",
      "Secunderabad - Campus",
      "LB Nagar - Campus",
      "Kukatpally - Campus"
    ][i % 5],

    vehicleType: [
      "Bus",
      "Van",
      "Electric Bus"
    ][i % 3],

    fuelType: [
      "Diesel",
      "CNG",
      "Electric"
    ][i % 3],

    driverName: "Driver " + i,

    driverPhone: "920000" + String(i).padStart(4, "0"),

    capacity: 30 + (i % 4) * 10,

    currentPassengers:
      10 + ((i * 3) % 30),

    distanceKm:
      5 + ((i * 2) % 26),

    averageSpeed:
      25 + (i % 6) * 5,

    departureTime:
      "07:" + String((i * 3) % 60).padStart(2, "0"),

    estimatedArrival:
      "08:" + String((10 + i * 2) % 60).padStart(2, "0"),

    fuelEfficiency:
      Number((8 + ((i * 0.3) % 7)).toFixed(2)),

    vehicleStatus:
      i % 12 === 0 ? "Maintenance" : "Active",

    lastMaintenance:
      new Date(2026, i % 9, 1 + (i % 25)),

    gpsEnabled:
      i % 8 !== 0
  });
}

db.transport.insertMany(transportData);

print(
  "Transport inserted:",
  db.transport.countDocuments()
);