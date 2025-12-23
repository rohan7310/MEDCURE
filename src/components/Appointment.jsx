import React, { useState } from "react";

const AppointmentForm = ({ onBook }) => {
  const [form, setForm] = useState({
    doctorName: "",
    specialization: "",
    date: "",
    time: "",
    patientName: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook?.(form);
    setForm({
      doctorName: "",
      specialization: "",
      date: "",
      time: "",
      patientName: "",
    });
  };

  return (
    <div className="container py-4 d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-4 shadow"
        style={{ width: "100%", maxWidth: "520px" }}
      >
        <h2 className="h4 fw-bold mb-3">Book Appointment</h2>

        <div className="mb-3">
          <label className="form-label">Doctor's Name</label>
          <input
            type="text"
            name="doctorName"
            placeholder="Enter doctor's name"
            value={form.doctorName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Specialization</label>
          <input
            type="text"
            name="specialization"
            placeholder="e.g. Cardiologist"
            value={form.specialization}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label className="form-label">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Patient Name</label>
          <input
            type="text"
            name="patientName"
            placeholder="Enter patient name"
            value={form.patientName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-semibold">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
