@'
# Advanced DBMS – Multi-Domain Data Intelligence System

## 📌 Project Overview

This project is an Advanced Database Management System built using MongoDB Atlas.

The system contains six independent databases representing different real-world domains. Each database contains 10 collections with structured and interconnected data.

The project demonstrates MongoDB database design, document-based data modeling, CRUD operations, aggregation pipelines, indexing, relationships using references, nested documents, arrays, and analytical queries.

---

## 🗂️ Database Architecture

| Database | Domain | Collections |
|---|---|---:|
| `smart_campus_ai` | Smart Campus Intelligence | 10 |
| `agri_market_ai` | Agriculture Marketplace | 10 |
| `healthcare_intelligence` | Healthcare Management | 10 |
| `smart_ecommerce` | E-Commerce Intelligence | 10 |
| `smart_travel` | Travel Management | 10 |
| `smart_finance` | Financial Intelligence | 10 |

### Total

- **6 Databases**
- **60 Collections**
- **60 Documents per Collection**
- **3600+ Documents**
- **10+ fields per document**

---

## 🏫 1. Smart Campus Intelligence

Database: `smart_campus_ai`

Collections:

- students
- faculty
- courses
- attendance
- assessments
- performance
- campus_events
- transport
- facilities
- complaints

This database focuses on student performance, attendance, faculty, courses, campus events, facilities, transportation, and complaint management.

---

## 🌾 2. Agriculture Marketplace

Database: `agri_market_ai`

Collections:

- farmers
- crops
- buyers
- orders
- payments
- market_prices
- farms
- weather
- equipment
- reviews

This database models an agricultural marketplace connecting farmers, crops, buyers, orders, payments, market prices, farms, equipment, weather information, and reviews.

---

## 🏥 3. Healthcare Intelligence

Database: `healthcare_intelligence`

Collections:

- patients
- doctors
- appointments
- diagnoses
- medications
- lab_results
- billing
- vitals
- admissions
- insurance_claims

This database represents healthcare operations including patients, doctors, appointments, diagnoses, laboratory results, medications, billing, admissions, and insurance claims.

---

## 🛒 4. Smart E-Commerce

Database: `smart_ecommerce`

Collections:

- customers
- products
- orders
- payments
- reviews
- inventory
- suppliers
- cart_activity
- shipments
- recommendations

This database models an e-commerce platform with customers, products, orders, payments, inventory, suppliers, shipments, reviews, cart activity, and recommendation data.

---

## ✈️ 5. Smart Travel

Database: `smart_travel`

Collections:

- travelers
- destinations
- bookings
- hotels
- transport_bookings
- activities
- itineraries
- travel_reviews
- weather
- travel_payments

This database manages travelers, destinations, bookings, hotels, transportation, activities, itineraries, reviews, weather, and travel payments.

---

## 💰 6. Smart Finance

Database: `smart_finance`

Collections:

- customers
- accounts
- transactions
- loans
- investments
- credit_cards
- expenses
- budgets
- insurance
- fraud_alerts

This database represents financial operations including accounts, transactions, loans, investments, expenses, budgets, insurance, credit cards, and fraud detection data.

---

## 🧠 MongoDB Concepts Demonstrated

- Database and collection creation
- Document-oriented data modeling
- CRUD operations
- Embedded documents and arrays
- Referenced relationships
- Aggregation pipelines
- `$match`
- `$group`
- `$sort`
- `$project`
- `$lookup`
- `$unwind`
- `$limit`
- Array queries
- Date-based queries
- Indexing
- Query optimization
- Data analysis
- MongoDB Atlas
- Database backup and restoration

---

## 📊 Project Scale

The project contains:

**6 databases × 10 collections × 60 documents**

= **3,600 documents**

Each collection contains multiple attributes representing realistic domain data.

---

## 🛠️ Technologies Used

- MongoDB
- MongoDB Atlas
- MongoDB Shell (`mongosh`)
- MongoDB Database Tools
- JavaScript
- Git
- GitHub
- Visual Studio Code

---

## 📁 Repository Structure

```text
advanced-dbms-mongodb-project/
│
├── databases/
│   ├── smart_campus_ai/
│   ├── agri_market_ai/
│   ├── healthcare_intelligence/
│   ├── smart_ecommerce/
│   ├── smart_travel/
│   └── smart_finance/
│
├── database_dumps/
│   ├── agri_market_ai/
│   ├── healthcare_intelligence/
│   ├── smart_campus_ai/
│   ├── smart_ecommerce/
│   ├── smart_finance/
│   └── smart_travel/
│
├── queries/
├── screenshots/
├── documentation/
└── README.md