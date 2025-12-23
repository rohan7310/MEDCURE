import React, { useState } from "react";
import "./DoctorSearch.css"; // Import CSS file

const doctors = [
  {
    id: 1,
    name: "Dr. Kavya Iyer",
    specialty: "Pediatrician",
    hospital: "Rainbow Children's Hospital",
    experience: 10,
    rating: 4.8,
    fee: 500,
    city: "Chennai",
    languages: ["English", "Tamil"],
  },
  {
    id: 2,
    name: "Dr. Arjun Singh",
    specialty: "Orthopedic Surgeon",
    hospital: "Spine & Bone Clinic",
    experience: 12,
    rating: 4.6,
    fee: 700,
    city: "Delhi",
    languages: ["English", "Hindi"],
  },
  {
    id: 3,
    name: "Dr. Meera Nair",
    specialty: "Cardiologist",
    hospital: "Apollo Hospital",
    experience: 15,
    rating: 4.9,
    fee: 1000,
    city: "Mumbai",
    languages: ["English", "Marathi"],
  },
];

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <h2>{doctor.name}</h2>
      <p className="specialty">{doctor.specialty}</p>
      <p>{doctor.hospital}</p>
      <p>Experience: {doctor.experience} yrs</p>
      <p>Rating: ⭐ {doctor.rating}</p>
      <p>Fee: ₹{doctor.fee}</p>
      <p>City: {doctor.city}</p>
      <p>Languages: {doctor.languages.join(", ")}</p>
      <button className="book-btn">Book Appointment</button>
    </div>
  );
};

export default function DoctorSearch() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(search.toLowerCase()) ||
    doc.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="doctor-container">
      <input
        type="text"
        placeholder="Search by name, specialty or city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="doctor-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p className="no-result">No doctors found</p>
        )}
      </div>
    </div>
  );
}
